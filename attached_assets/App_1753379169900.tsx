import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Mail, User, Download } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  wallpaper: string;
}

function App() {
  const [selectedWallpaper, setSelectedWallpaper] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    wallpaper: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const wallpapers = [
    { 
      id: 'WP1', 
      title: 'Abstract Flow', 
      preview: 'https://drive.google.com/thumbnail?id=1ykz-U8RcHas80fqhLWrjBsIZgjprkWsy&sz=w400',
      downloadId: '1ykz-U8RcHas80fqhLWrjBsIZgjprkWsy'
    },
    { 
      id: 'WP2', 
      title: 'Neon Nights', 
      preview: 'https://drive.google.com/thumbnail?id=1jqvmUht49_puymEojnw67aEINk32F7z7&sz=w400',
      downloadId: '1jqvmUht49_puymEojnw67aEINk32F7z7'
    },
    { 
      id: 'WP3', 
      title: 'Ocean Waves', 
      preview: 'https://drive.google.com/thumbnail?id=18xhRcW5mjhY6xV5OMd5lENuNJ82LNa6T&sz=w400',
      downloadId: '18xhRcW5mjhY6xV5OMd5lENuNJ82LNa6T'
    },
    { 
      id: 'WP4', 
      title: 'Mountain Peak', 
      preview: 'https://drive.google.com/thumbnail?id=1cPDLDuhOdqwGwPj-9gF8eNPIHceQE0GE&sz=w400',
      downloadId: '1cPDLDuhOdqwGwPj-9gF8eNPIHceQE0GE'
    },
    { 
      id: 'WP5', 
      title: 'City Lights', 
      preview: 'https://drive.google.com/thumbnail?id=1qPICtNclnySWLFbwCTwltvVxL58sQAu6&sz=w400',
      downloadId: '1qPICtNclnySWLFbwCTwltvVxL58sQAu6'
    },
    { 
      id: 'WP6', 
      title: 'Forest Path', 
      preview: 'https://drive.google.com/thumbnail?id=1zc4hqMPBE7cZEORHdmg_Quh_5UAyGclz&sz=w400',
      downloadId: '1zc4hqMPBE7cZEORHdmg_Quh_5UAyGclz'
    },
    { 
      id: 'WP7', 
      title: 'Desert Dunes', 
      preview: 'https://drive.google.com/thumbnail?id=1ZL8YavCNdH2wADhHmtSmmPxGSOKiJi5w&sz=w400',
      downloadId: '1ZL8YavCNdH2wADhHmtSmmPxGSOKiJi5w'
    },
    { 
      id: 'WP8', 
      title: 'Aurora Sky', 
      preview: 'https://drive.google.com/thumbnail?id=1yGlW8MuZ7C-HB6H2XvbKjIjEb8Vw0bmB&sz=w400',
      downloadId: '1yGlW8MuZ7C-HB6H2XvbKjIjEb8Vw0bmB'
    },
    { 
      id: 'WP9', 
      title: 'Cosmic Dream', 
      preview: 'https://drive.google.com/thumbnail?id=1HMb2X7Wu7XmlsiF7DoCDNSZ8NGg1lkAG&sz=w400',
      downloadId: '1HMb2X7Wu7XmlsiF7DoCDNSZ8NGg1lkAG'
    },
    { 
      id: 'WP10', 
      title: 'Sunset Horizon', 
      preview: 'https://drive.google.com/thumbnail?id=14nw7DuzAeqGc9LdNRjb0o1QUSLKn7Lu4&sz=w400',
      downloadId: '14nw7DuzAeqGc9LdNRjb0o1QUSLKn7Lu4'
    },
    { 
      id: 'WP11', 
      title: 'Minimalist', 
      preview: 'https://drive.google.com/thumbnail?id=1w51jHpoBYAHKJ4yPWODdPcLnPCVhfKR1&sz=w400',
      downloadId: '1w51jHpoBYAHKJ4yPWODdPcLnPCVhfKR1'
    }
  ];

  const handleGetNow = (wallpaperId: string) => {
    setSelectedWallpaper(wallpaperId);
    setFormData({ ...formData, wallpaper: wallpaperId });
    setShowForm(true);
    setShowSuccess(false);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedWallpaper(null);
    setFormData({ name: '', email: '', wallpaper: '' });
    setShowSuccess(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = new FormData();
      form.append('name', formData.name);
      form.append('email', formData.email);
      form.append('wallpaper', formData.wallpaper);

      await fetch('https://script.google.com/macros/s/AKfycbyE4QoYrNPfabkovXofvg40HbO3Q87ALndL_sxN_LvD9IgiY6BHTOPzCVHbb3ZyYCuU_Q/exec', {
        method: 'POST',
        body: form
      });

      setShowSuccess(true);
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToWallpapers = () => {
    const wallpapersSection = document.getElementById('wallpapers');
    if (wallpapersSection) {
      wallpapersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showMoreWallpapers = () => {
    // This could expand to show all wallpapers or navigate to a dedicated page
    // For now, it will scroll to the top of wallpapers section
    scrollToWallpapers();
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img src="/F (2).png" alt="FilmyTea" className="h-8 w-8" />
              <h1 className="text-xl font-semibold text-white">FilmyTea</h1>
            </div>
            <div className="flex items-center space-x-4">
              <ShoppingCart className="w-6 h-6 text-gray-400" />
              <Menu className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Crafted for You
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Your screen, your scene.
          </p>
        </div>
      </section>

      {/* Posters Section */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6">Posters</h3>
          
          <div className="text-center py-16">
            <p className="text-4xl font-bold text-gray-400 mb-6">Coming Soon</p>
            <p className="text-gray-500 text-lg">Amazing movie posters are on the way!</p>
          </div>
          
          <div className="text-center">
            <button 
              onClick={scrollToWallpapers}
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full transition-colors"
            >
              view more
            </button>
          </div>
        </div>
      </section>

      {/* Wallpapers Section */}
      <section id="wallpapers" className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6">Wallpapers</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {wallpapers.slice(0, 6).map((wallpaper) => (
              <div key={wallpaper.id} className="group">
                <div 
                  className="bg-gradient-to-br from-blue-200 via-green-200 to-green-300 rounded-lg overflow-hidden relative cursor-pointer"
                  style={{ aspectRatio: '768/1666' }}
                  onClick={() => handleGetNow(wallpaper.id)}
                >
                  <img 
                    src={wallpaper.preview} 
                    alt={wallpaper.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to gradient background if image fails to load
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Download className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button 
              onClick={showMoreWallpapers}
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full transition-colors"
            >
              view more
            </button>
          </div>
        </div>
      </section>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Get Your Wallpaper</h3>
              <button 
                onClick={handleCloseForm}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {showSuccess ? (
              <div className="text-center py-8">
                <div className="mb-4">
                  <Mail className="w-16 h-16 text-green-400 mx-auto" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Check your email now!</h4>
                <p className="text-gray-300 mb-6">Your download link has been sent to your email address.</p>
                <button
                  onClick={handleCloseForm}
                  className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-xl transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gray-600 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gray-600 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                
                <input type="hidden" name="wallpaper" id="wallpaperID" value={formData.wallpaper} />
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 text-white py-3 px-4 rounded-xl transition-colors flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <span>Processing Request...</span>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Send Download Link</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;