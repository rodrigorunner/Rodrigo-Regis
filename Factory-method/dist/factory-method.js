"use strict";
/**
 * Factory Method Pattern
 */
/**
 * CreateTransport is not responsible to create objects instead of
 * it creates an abstract factory_method and it is responsible to create the objects.
 */
class CreateTransport {
    defineType() {
        const product = this.factory_method();
        return `Despachante Aduaneiro: Enviando via: ${product.type()}`;
    }
}
/**
 * Product Create is the created object, we need to extends the CreateTransport signature
 * and use this method to create a new product.
 */
class RoadCreate extends CreateTransport {
    factory_method() {
        return new RoadProduct();
    }
}
class SeaCreate extends CreateTransport {
    factory_method() {
        return new SeaProduct();
    }
}
/**
 * Concrete Products are the products created,
 * we need to create two products, Road and Sea.
 */
class RoadProduct {
    type() {
        return 'Road Logic';
    }
}
class SeaProduct {
    type() {
        return 'Sea Logic';
    }
}
function sendProduct() {
    // console.log('Smart Scanner')
    // clientCode(new RoadCreate())
    console.log('***********************');
    console.log('Vessel Fast Dude');
    clientCode(new SeaCreate());
}
sendProduct();
/**
 * Client Code.
 */
function clientCode(createTransport) {
    console.log('Gostaria de exportar uma carga para Ásia.');
    console.log(createTransport.defineType());
}
