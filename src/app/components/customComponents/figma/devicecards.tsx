import React from 'react';

export default function DeviceCardsSection() {
  // Device repair cards data
  const deviceCards = [
    { id: 1, name: "iPhone", image: "/assets/category/iPhone.png" },
    { id: 2, name: "Samsung", image: "/assets/category/Samsung.jpg" },
    { id: 3, name: "iPad", image: "/assets/category/ipad.jpg" },
    { id: 4, name: "Game Consoles", image: "/assets/category/game console.jpg" },
    { id: 5, name: "Mac", image: "/assets/category/mac.jpg" },
    { id: 6, name: "Computer", image: "/assets/category/computer.jpg" },
    { id: 7, name: "Tablet", image: "/assets/category/Tablet.png" },
    { id: 8, name: "Other Phones", image: "/assets/category/other phone.jpg" },
  ];

  // Function to handle card click
  const handleCardClick = (deviceId: number) => {
    // Navigate to device details page
    console.log(`Navigating to details page for device ID: ${deviceId}`);
    // In a real application, you would use router here
    // router.push(`/device/${deviceId}`);
  };

  return (
    <div className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Discover All The Devices</h2>
          <p className="text-2xl font-bold text-red-600 mt-2">You Can Repair With Us!</p>
        </div>
        
        {/* Device cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {deviceCards.map((device) => (
            <div 
              key={device.id}
              onClick={() => handleCardClick(device.id)}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="p-4">
                <img 
                  src={device.image} 
                  alt={device.name} 
                  className="w-full h-48 object-contain bg-gray-200 rounded-md"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-gray-900">{device.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}