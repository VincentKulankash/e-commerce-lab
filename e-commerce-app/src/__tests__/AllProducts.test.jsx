import { render, screen } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import ProductPage from '../components/ProductPage'

vi.mock('../hooks/useProducts', () => ({
  useProducts: () => ({
    products: [
      { id: '1', name: 'iPhone 14', brand: 'Apple', price: 999, description: 'A phone', category: 'Phones', image: '', stock: 10, rating: 4.5 },
      { id: '2', name: 'Samsung Tab', brand: 'Samsung', price: 499, description: 'A tablet', category: 'Tablets', image: '', stock: 5, rating: 4.0 },
    ],
    loading: false,
    error: null,
    searchProducts: vi.fn(),
    deleteProduct: vi.fn(),
  })
}))

describe('All Products', () => {
  test('displays all products on the page', () => {
    render(
      <MemoryRouter>
        <ProductPage />
      </MemoryRouter>
    )
    expect(screen.getByText('iPhone 14')).toBeInTheDocument()
    expect(screen.getByText('Samsung Tab')).toBeInTheDocument()
  })

  test('shows all products heading', () => {
    render(
      <MemoryRouter>
        <ProductPage />
      </MemoryRouter>
    )
    expect(screen.getByText('All Products')).toBeInTheDocument()
  })

  test('displays product price correctly', () => {
    render(
      <MemoryRouter>
        <ProductPage />
      </MemoryRouter>
    )
    expect(screen.getByText('Ksh999')).toBeInTheDocument()
  })
})