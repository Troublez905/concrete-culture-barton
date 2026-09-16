"use client";

import { Minus, Plus, Trash2, X } from "lucide-react";
import { Product } from "@/data/products";

export type CartItem = Product & { quantity: number };

export function CartDrawer({
  items,
  open,
  onClose,
  onAdd,
  onRemove,
  onDelete
}: {
  items: CartItem[];
  open: boolean;
  onClose: () => void;
  onAdd: (slug: string) => void;
  onRemove: (slug: string) => void;
  onDelete: (slug: string) => void;
}) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 75 || subtotal === 0 ? 0 : 8;

  return (
    <div className={`fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
      <div className={`absolute inset-0 bg-night/70 transition-opacity ${open ? "opacity-100" : "opacity-0"}`} onClick={onClose} />
      <aside className={`absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto border-l border-cream/20 bg-night p-5 shadow-2xl transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between">
          <h2 className="font-display text-4xl uppercase">Cart</h2>
          <button className="focus-ring rounded-md border border-cream/20 p-2" onClick={onClose} aria-label="Close cart"><X /></button>
        </div>
        {items.length === 0 ? (
          <p className="mt-8 rounded-lg border border-dashed border-cream/25 p-6 text-cream/70">Your demo cart is empty. Add supplies, capsule pieces, or CC Lab tools.</p>
        ) : (
          <div className="mt-6 space-y-4">
            {items.map((item) => (
              <div key={item.slug} className="rounded-lg border border-cream/15 bg-cream/5 p-4">
                <div className="flex justify-between gap-4">
                  <div>
                    <p className="font-bold text-white">{item.title}</p>
                    <p className="text-sm text-cream/60">${item.price.toFixed(2)}</p>
                  </div>
                  <button className="focus-ring text-cream/60 hover:text-freight" onClick={() => onDelete(item.slug)} aria-label={`Remove ${item.title}`}><Trash2 size={18} /></button>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <button className="focus-ring rounded bg-cream/10 p-2" onClick={() => onRemove(item.slug)} aria-label="Decrease quantity"><Minus size={16} /></button>
                  <span className="w-8 text-center font-black">{item.quantity}</span>
                  <button className="focus-ring rounded bg-cream/10 p-2" onClick={() => onAdd(item.slug)} aria-label="Increase quantity"><Plus size={16} /></button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="mt-8 border-t border-cream/15 pt-5">
          <div className="flex justify-between text-cream/70"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
          <div className="mt-2 flex justify-between text-cream/70"><span>Estimated shipping</span><span>{shipping === 0 ? "Pickup / free" : `$${shipping.toFixed(2)}`}</span></div>
          <div className="mt-4 flex justify-between text-xl font-black text-white"><span>Total</span><span>${(subtotal + shipping).toFixed(2)}</span></div>
          <button className="focus-ring mt-5 w-full rounded-md bg-safety px-4 py-3 font-black uppercase text-night">Prototype checkout</button>
          <p className="mt-3 text-xs text-cream/50">Stripe, Shopify, WooCommerce, Medusa, or Supabase checkout can connect later.</p>
        </div>
      </aside>
    </div>
  );
}
