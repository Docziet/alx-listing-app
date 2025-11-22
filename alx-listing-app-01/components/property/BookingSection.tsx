import { useState, useMemo } from 'react'


const parseDate = (d?: string) => (d ? new Date(d) : null)


const daysBetween = (a: Date | null, b: Date | null) => {
if (!a || !b) return 0
const diff = Math.ceil((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24))
return diff > 0 ? diff : 0
}


const BookingSection: React.FC<{ price: number }> = ({ price }) => {
const [checkIn, setCheckIn] = useState<string>('')
const [checkOut, setCheckOut] = useState<string>('')


const nights = useMemo(() => daysBetween(parseDate(checkIn), parseDate(checkOut)), [checkIn, checkOut])
const subtotal = useMemo(() => nights * price, [nights, price])
const serviceFee = useMemo(() => Math.round(subtotal * 0.1), [subtotal])
const total = subtotal + serviceFee


return (
<div className="bg-white p-4 rounded shadow">
<div className="flex justify-between items-center">
<h3 className="text-xl font-semibold">${price}/night</h3>
</div>


<div className="mt-4">
<label className="block text-sm font-medium">Check-in</label>
<input
type="date"
value={checkIn}
onChange={(e) => setCheckIn(e.target.value)}
className="mt-1 block w-full border rounded p-2"
/>
</div>


<div className="mt-4">
<label className="block text-sm font-medium">Check-out</label>
<input
type="date"
value={checkOut}
onChange={(e) => setCheckOut(e.target.value)}
className="mt-1 block w-full border rounded p-2"
/>
</div>


<div className="mt-4 border-t pt-4">
<div className="flex justify-between text-sm">
<span>Subtotal ({nights} nights)</span>
<span>${subtotal}</span>
</div>
<div className="flex justify-between text-sm mt-1">
<span>Service fee</span>
<span>${serviceFee}</span>
</div>
<div className="flex justify-between font-semibold mt-2">
<span>Total</span>
<span>${total}</span>
</div>
</div>


<button
disabled={!nights}
className={`mt-4 w-full py-2 rounded ${nights ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700 cursor-not-allowed'}`}>
Reserve now
</button>
</div>
)
}


export default BookingSection