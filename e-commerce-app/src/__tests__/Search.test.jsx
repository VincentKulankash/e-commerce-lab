import { render, screen, fireEvent } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import ProductPage from '../components/ProductPage'

vi.mock('../hooks/useProducts', () => ({
  useProducts: () => ({
    products: [
      { id: '1', name: 'iPhone 14', brand: 'Apple', price: 999, description: 'A phone', category: 'Phones', image: '', stock: 10, rating: 4.5 },
      { id: '2', name: 'Samsung Tab', brand: 'Samsung', price: 499, description: 'A tablet', category: 'Tablets', image: '', stock: 5, rating: 4.0 },
      { id: '3', name: 'MacBook Pro', brand: 'Apple', price: 1999, description: 'A laptop', category: 'Laptops', image: '', stock: 3, rating: 4.8 },
    ],
    loading: false,
    error: null,
    deleteProduct: vi.fn(),
    searchProducts: (query) => {
      const lower = query.toLowerCase()
      return [
        { id: '1', name: 'iPhone 14', brand: 'Apple', price: 999, description: 'A phone', category: 'Phones', image: '', stock: 10, rating: 4.5 },
        { id: '2', name: 'Samsung Tab', brand: 'Samsung', price: 499, description: 'A tablet', category: 'Tablets', image: '', stock: 5, rating: 4.0 },
        { id: '3', name: 'MacBook Pro', brand: 'Apple', price: 1999, description: 'A laptop', category: 'Laptops', image: '', stock: 3, rating: 4.8 },
      ].filter(p => p.name.toLowerCase().includes(lower) || p.brand.toLowerCase().includes(lower))
    },
  })
}))

describe('Search', () => {
  test('renders search input', () => {
    render(
      <MemoryRouter>
        <ProductPage />
      </MemoryRouter>
    )
    expect(screen.getByPlaceholderText('Search products...')).toBeInTheDocument()
  })

  test('filters products by name when searching', () => {
    render(
      <MemoryRouter>
        <ProductPage />
      </MemoryRouter>
    )
    const input = screen.getByPlaceholderText('Search products...')
    fireEvent.change(input, { target: { value: 'iphone' } })
    fireEvent.click(screen.getByText('Search'))
    expect(screen.getByText('iPhone 14')).toBeInTheDocument()
    expect(screen.queryByText('Samsung Tab')).not.toBeInTheDocument()
  })

  test('filters products by brand when searching', () => {
    render(
      <MemoryRouter>
        <ProductPage />
      </MemoryRouter>
    )
    const input = screen.getByPlaceholderText('Search products...')
    fireEvent.change(input, { target: { value: 'Apple' } })
    fireEvent.click(screen.getByText('Search'))
    expect(screen.getByText('iPhone 14')).toBeInTheDocument()
    expect(screen.getByText('MacBook Pro')).toBeInTheDocument()
    expect(screen.queryByText('Samsung Tab')).not.toBeInTheDocument()
  })
})