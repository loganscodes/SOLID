(() => {
    
    //Principio de responsabilidad unica - solo debe hacer una cosa 

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService{

        private httpAdapter: Object[] = []

        getProduct( id: number ){
            console.log('Producto', { id, name: 'OLED Tv' } )
        }

        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }
    }

    class ProductBloc{
        private productService: ProductService;
        private mailer: Mailer;

        constructor(productService: ProductService, mailer: Mailer){
            this.productService = productService;
            this.mailer = mailer;
        }

        loadProduct( id: number){
            this.productService.getProduct(id)
        }

        saveProduct( product: Product ){
            this.productService.saveProduct(product)
        }

        
    }

    class Mailer{
        notifyClients() {
            console.log('Enviando correo a los clientes');
        }
    }
    
    class CartBloc{

        private itemsInCart: Object[] = []

        addToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }

    }
    
    const productService = new ProductService();
    const cardBloc = new CartBloc();
    const mailer = new Mailer();

    productService.getProduct(10);
    productService.saveProduct({ id: 10, name: 'OLED TV' });
    mailer.notifyClients();
    cardBloc.addToCart(10);


})();