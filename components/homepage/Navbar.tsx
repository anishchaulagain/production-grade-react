"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ShoppingCart, User } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/70 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-gray-900"
          >
            ShopSphere
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link href="/products" className="hover:text-black transition">
              Products
            </Link>
            <Link href="/categories" className="hover:text-black transition">
              Categories
            </Link>
            <Link href="/deals" className="hover:text-black transition">
              Deals
            </Link>
            <Link href="/contact" className="hover:text-black transition">
              Contact
            </Link>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-6">
            
            {/* Cart */}
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-5 w-5 text-gray-700" />
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                3
              </span>
            </Link>

            {/* Profile */}
            <Link href="/account">
              <User className="h-5 w-5 text-gray-700 hover:text-black transition" />
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-800" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="space-y-4 px-4 py-6 text-sm font-medium text-gray-700">
            <Link href="/products" className="block">Products</Link>
            <Link href="/categories" className="block">Categories</Link>
            <Link href="/deals" className="block">Deals</Link>
            <Link href="/contact" className="block">Contact</Link>
            <Link href="/cart" className="block">Cart</Link>
            <Link href="/account" className="block">Account</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
