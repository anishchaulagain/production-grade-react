"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart, User, Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/products?search=${query}`);
    setQuery("");
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b py-4 bg-white/70 backdrop-blur-md">
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-gray-900"
          >
            ShopSphere
          </Link>

          {/* Search Bar (Desktop) */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex flex-1 max-w-md"
          >
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-full border border-gray-200 bg-gray-100 py-2 pl-9 pr-4 text-sm focus:border-black focus:bg-white focus:outline-none transition"
              />
            </div>
          </form>

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
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
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
          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-full border border-gray-200 bg-gray-100 py-2 pl-9 pr-4 text-sm focus:border-black focus:bg-white focus:outline-none transition"
            />
          </form>

          {/* Mobile Links */}
          <div className="space-y-4 px-4 py-6 text-sm font-medium text-gray-700">
            <Link href="/products" className="block">
              Products
            </Link>
            <Link href="/categories" className="block">
              Categories
            </Link>
            <Link href="/deals" className="block">
              Deals
            </Link>
            <Link href="/contact" className="block">
              Contact
            </Link>
            <Link href="/cart" className="block">
              Cart
            </Link>
            <Link href="/account" className="block">
              Account
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
