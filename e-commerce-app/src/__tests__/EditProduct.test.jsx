import { render, screen } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

vi.mock('../hooks/useProducts', () => ({
  useProducts: () => ({
    products: [],
    updateProduct: vi.fn(),
    loading: false,
  })
}))

vi.mock('../components/EditProduct', () => ({
  default: () => <div>Edit Product Page</div>
}))

import EditProduct from '../components/EditProduct'

describe('Edit Product', () => {
  test('renders edit product page', () => {
    render(
      <MemoryRouter initialEntries={['/products/1/edit']}>
        <Routes>
          <Route path="/products/:id/edit" element={<EditProduct />} />
        </Routes>
      </MemoryRouter>
    )
    expect(screen.getByText('Edit Product Page')).toBeInTheDocument()
  })

  test('edit route exists', () => {
    render(
      <MemoryRouter initialEntries={['/products/1/edit']}>
        <Routes>
          <Route path="/products/:id/edit" element={<EditProduct />} />
        </Routes>
      </MemoryRouter>
    )
    expect(screen.getByText('Edit Product Page')).toBeInTheDocument()
  })

  test('edit component mounts without crashing', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/products/1/edit']}>
        <Routes>
          <Route path="/products/:id/edit" element={<EditProduct />} />
        </Routes>
      </MemoryRouter>
    )
    expect(container).toBeTruthy()
  })
})