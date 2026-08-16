import { useState, useEffect } from "react";
import {api} from '../services/api';

export const useProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        setLoading(true);
        try{
            const data = await api.getProducts();
            setProducts(data);
            setError(null);
        } catch (error){
            setError(error.message)
        } finally {
            setLoading(false);
        }
    };

    const getProduct = async (id) => {
        setLoading(true);
        try{
            const data = await api.getProduct();
            return data;
        }catch (error) {
            setError(error.message);
            throw error;
        }finally {
            setLoading(false);
        }
    };


    const addProduct = async (product) => {
        setLoading(true);
        try{
            const newProduct = await api.addProduct(product)
            setProducts([...products, newProduct])
            return newProduct;
        }catch (error){
            setError(error.message);
            throw error;
        }finally{
            setLoading(false);
        }
    };


    const updateProduct = async (id, updates) => {
        setLoading(true);
        try{
            const updated = await api.updateProduct(id, updates);
            setProducts(products.map(p => p.id === id ? updated : p));
            return updated
        }catch (error){
            setError(error.message);
            throw error
        }finally {
            setLoading(false);
        }
    };

    const deleteProduct = async (id) => {
        setLoading(true);
        try{
            await api.deleteProduct(id);
            setProducts(products.filter(p => p.id !== id));
        } catch (error){
            setError (error.message);
            throw error;
        }finally {
            setLoading(false);
        }
    };

    const searchProducts = async (query) => {
        setLoading(true);
        try{
            const results = await api.searchProducts(query);
            return results;
        } catch(error){
            setError(error.message);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    useEffect (() => {
        fetchProducts();

    }, []);

    return {
        products,
        loading,
        error,
        fetchProducts,
        getProduct,
        addProduct,
        updateProduct,
        deleteProduct,
        searchProducts,
    };
};

export default useProducts; 