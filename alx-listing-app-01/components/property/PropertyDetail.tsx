import Image from 'next/image'


return (
<div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
{/* Left/main column */}
<main className="lg:col-span-2">
{/* Header */}
<div className="mb-4">
<h1 className="text-3xl font-bold">{property.name}</h1>
<div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
<span className="text-yellow-500">⭐ {property.rating}</span>
<span>
{property.address.city}, {property.address.country}
</span>
</div>
</div>


{/* Image grid */}
<div className="grid grid-cols-2 gap-3">
<div className="col-span-2 h-80 relative rounded overflow-hidden">
<Image src={images[0]} alt={property.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
</div>
{images.slice(1, 4).map((src, idx) => (
<div key={idx} className="h-40 relative rounded overflow-hidden">
<Image src={src} alt={`${property.name}-${idx}`} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
</div>
))}
</div>


{/* Tabs */}
<div className="mt-6">
<div className="flex gap-2 mb-4">
<TabButton active={activeTab === 'offer'} onClick={() => setActiveTab('offer')} label="What we offer" />
<TabButton active={activeTab === 'reviews'} onClick={() => setActiveTab('reviews')} label="Reviews" />
<TabButton active={activeTab === 'host'} onClick={() => setActiveTab('host')} label="About host" />
</div>


<div className="bg-white p-4 rounded shadow-sm">
{activeTab === 'offer' && (
<div>
<h3 className="text-lg font-semibold mb-2">About this place</h3>
<p className="text-gray-700 mb-4">{property.description}</p>


<h4 className="text-md font-semibold mb-2">Amenities</h4>
<ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
{property.category.map((amenity) => (
<li key={amenity} className="flex items-center gap-2 text-sm bg-gray-50 p-2 rounded">
{/* replace with icons as needed */}
<span className="text-gray-600">{amenity}</span>
</li>
))}
</ul>
</div>
)}


{activeTab === 'reviews' && <ReviewSection reviews={property.reviews} />}


{activeTab === 'host' && (
<div>
<h3 className="text-lg font-semibold">Host</h3>
<p className="text-gray-700">Host is experienced and responsive. You can contact via the listing platform.</p>
</div>
)}
</div>
</div>


{/* Reviews (also accessible via tab) */}
<div className="mt-6">
<ReviewSection reviews={property.reviews} />
</div>
</main>


{/* Right column - Booking */}
<aside className="lg:col-span-1">
<div className="sticky top-20">
<BookingSection price={property.pricePerNight} />
</div>
</aside>
</div>
)
}


export default PropertyDetail;