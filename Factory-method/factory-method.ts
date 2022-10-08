/**
 * Factory Method Pattern
 */

/**
 * CreateTransport is not responsible to create objects instead of 
 * it creates an abstract factory_method and it is responsible to create the objects.
 */

abstract class CreateTransport {

    public abstract factory_method(): Transport

    public defineType(): string {
        const product = this.factory_method()
        return `Despachante Aduaneiro: Enviando via: ${product.type()}`
    }
}

/**
 * Product Create is the created object, we need to extends the CreateTransport signature
 * and use this method to create a new product.
 */
class RoadCreate extends CreateTransport {
    public factory_method(): Transport {
        return new RoadProduct()
    }
}

class SeaCreate extends CreateTransport {
    public factory_method(): Transport {
        return new SeaProduct()
    }
}


/**
 * Transport is the interface to implement in a subclasses.
 */
interface Transport {
    /**
     * Define the type of the vehicle.
     */
    type(): string
}

/**
 * Concrete Products are the products created,
 * we need to create two products, Road and Sea. 
 */
class RoadProduct implements Transport {
    public type(): string {
        return 'Road Logic'
    }
}

class SeaProduct implements Transport {
    public type(): string {
        return 'Sea Logic'
    }
}

function sendProduct() {
    // console.log('Smart Scanner')
    // clientCode(new RoadCreate())
    console.log('***********************')
    console.log('Vessel Fast Dude')
    clientCode(new SeaCreate())
}

sendProduct()

/**
 * Client Code.
 */
function clientCode(createTransport: CreateTransport) {
    console.log('Gostaria de exportar uma carga para Ásia.')
    console.log(createTransport.defineType())
}

