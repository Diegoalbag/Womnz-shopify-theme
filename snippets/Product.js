const Product = {
    props: ['product'],
    template: `
        <div class="Product d-flex flex-column justify-content-center">
            <figure class="Product-image h-75">
                <img class="h-100 w-100 shadow" :src="product.images[0]"/>
            </figure>
            <h2 v-html="product.title" class="text-black"></h2>
            <p v-html="product.minPrice" class="text-black h3 text-muted"></p>
        </div>
    `,
};

export default Product;