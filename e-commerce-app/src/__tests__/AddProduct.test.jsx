import { render, screen, fireEvent } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import FormPage from '../components/FormPage'

const mockNavigate = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return { ...actual, useNavigate: () => mockNavigate }
})

vi.mock('../hooks/useProducts', () => ({
  useProducts: () => ({
    addProduct: vi.fn().mockResolvedValue({}),
    loading: false,
  })
}))

describe('Add Product Form', () => {
  test('renders the form fields', () => {
    render(
      <MemoryRouter>
        <FormPage />
      </MemoryRouter>
    )
    expect(screen.getByPlaceholderText('Enter product name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter brand name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('100.00')).toBeInTheDocument()
    expect(screen.getByText('Add Product')).toBeInTheDocument()
  })

  test('shows validation errors when form is submitted empty', () => {
    render(
      <MemoryRouter>
        <FormPage />
      </MemoryRouter>
    )
    fireEvent.click(screen.getByText('Add Product'))
    expect(screen.getByText('Product name is required')).toBeInTheDocument()
    expect(screen.getByText('Brand is required')).toBeInTheDocument()
  })

  test('cancel button navigates back to products', () => {
    render(
      <MemoryRouter>
        <FormPage />
      </MemoryRouter>
    )
    fireEvent.click(screen.getByText('Cancel'))
    expect(mockNavigate).toHaveBeenCalledWith('/products')
  })
})