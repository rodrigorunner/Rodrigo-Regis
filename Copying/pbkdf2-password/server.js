const express = require('express')
const hash = require('pbkdf2-password')
const ejs = require('ejs')
const path = require('path')
const session = require('express-session')

const app = express()

// Config
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Middleware
app.use(express.urlencoded({extended: false}))
app.use(session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored.
    secret: 'oh boy'
}))

// Session-persisted message middleware
app.use((req, res, next) => {
    const err = req.session.error
    const msg = req.session.success
    delete req.session.error
    delete req.session.success
    res.locals.message = '' 
    if(err) res.locals.message = '<p class="msg error">' + err + '</p>'
    if(msg) res.locals.message = '<p class="msg success">' + msg + '</p>'
    next()
})

// Objected to store data
const obj = {
   users: { name: 'users' }
}

/**
 * When we create a user, generate a salt and
 * hash the password ('beaty' is the pass here)
 */

/**
 * First params is the password and a callback is
 * called with four params such as err, salt, pass
 * and hash.  
 */
hash({password: 'dude'}, function(err, salt, pass, hash) {
    // Se existir um erro retorne o erro.
    if (err) return err
    // Adicionando salt no "obj"
    obj.users.salt = salt 
    // Adicionando hash no "obj".
    obj.users.hash = hash
})

// Authenticate using our plain-object database "obj"!
// Authenticate Middlewares
const authenticate = (name, pass, fn) => {
    if(!module.children) console.log('authenticate %s:%s', name, pass)
    let user = obj[name]
    if(!user) return fn(null, null)
    /**
     * Aplly the same algorithm to the posted password,
     * applying the hash against the pass/salt, if the is
     * a match we found the user.
     */
    hash({ password: pass, salt: user.salt }, function(err, pass, salt, hash) {
        if(err) return fn(err)
        if(hash === user.hash) return fn(null, user)
        fn(null, null)
    })
}

const restrict = (req, res, next) => {
    if(req.session.user) {
        next()
    } else {
        req.session.error = 'Access denied!'
        res.redirect('/login')
    }
}

app.get('/', (req, res) => {
    res.redirect('/login')
})

app.get('/restricted', restrict, (req, res) => {
    res.send('Oh boy! restriced area, click to <a href="/logout">logout</a>')
})

app.get('/logout', (req, res) => {
    /**
     * Destroy the user's session to log them out will
     * be re-created next request. 
     */
    req.session.destroy(() => {
        res.redirect('/')
    })
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', (req, res, next) => {
    authenticate(req.body.username, req.body.password, function(err, user) {
        if(err) return next(err)
        if(user) {
            /**
             * Regenerate session when signing in
             * to prevent fixation.
             */
            req.session.regenerate(function() {
                /**
                 * Store the user's primary key in
                 * the session store to be retrieved,
                 * or in this case the entire user obj.
                 */
                req.session.user = user 
                req.session.success = 'Authenticate as ' + user.name + ' click to <a href="/logout">logout</a>.' + ' You may now access <a href="/restricted">/restricted</a>.'
                res.redirect('back')
            })
        } else {
            req.session.error = 'Authentication failed, please check your.' 
            res.redirect('/login')
        }
    })
})

app.listen(3000, () => {
    console.log('Server running on port 3000!')
})