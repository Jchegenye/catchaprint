//const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

const WooCommerce = new WooCommerceRestApi({
    url: 'http://catchaprint.test/',
    consumerKey: 'ck_b7d4b025f78106fb156fe06333a9a82757071f87',
    consumerSecret: 'cs_c2cad3486d064d83ac9a2058d7be027f2a35945d',
    version: 'wc/v3',
    //queryStringAuth: true // Force Basic Authentication as query string true and using under HTTPS
});


export default {
    WooCommerce,
};