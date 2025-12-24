'use client';

import { useState } from 'react';
import { ArrowLeft, Upload, DollarSign, Shield, Database, MessageCircle, Award } from 'lucide-react';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <Link href="/" className="flex items-center gap-2 text-slate-300 hover:text-white mb-6 w-fit">
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Interactive Project Demos</h1>
          <p className="text-xl text-slate-300">
            Explore live demos of my academic and professional projects
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="space-y-16">
          {/* TRUEFACE Demo */}
          <TruefaceDemo />

          {/* ATM Demo */}
          <ATMDemo />

          {/* Security Testing Demo */}
          <SecurityDemo />

          {/* Movie Store Demo */}
          <MovieStoreDemo />

          {/* Database Demo */}
          <DatabaseDemo />

          {/* Chatbot Demo */}
          <ChatbotDemo />

          {/* Fuse Bootcamp Badge */}
          <FuseBootcampCard />
        </div>
      </main>
    </div>
  );
}

// TRUEFACE Image Protection Demo
function TruefaceDemo() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [watermarked, setWatermarked] = useState(false);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target?.result as string);
        setWatermarked(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const applyWatermark = () => {
    setWatermarked(true);
  };

  return (
    <section className="bg-white rounded-lg shadow-lg p-8 border border-slate-200">
      <div className="flex items-center gap-3 mb-6">
        <Upload className="text-emerald-600" size={32} />
        <div>
          <h2 className="text-3xl font-bold text-slate-900">TRUFACE - Image Protection Platform</h2>
          <p className="text-slate-600">Capstone Project • PHP/MySQL</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">Upload & Protect Your Images</h3>
          <div className="space-y-4">
            <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
                className="hidden"
                id="truface-upload"
              />
              <label htmlFor="truface-upload" className="cursor-pointer">
                <Upload className="mx-auto text-slate-400 mb-2" size={48} />
                <p className="text-slate-600">Click to upload an image</p>
              </label>
            </div>

            {selectedImage && (
              <button
                onClick={applyWatermark}
                className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
              >
                Apply Watermark Protection
              </button>
            )}
          </div>

          <div className="mt-6 p-4 bg-slate-50 rounded-lg">
            <h4 className="font-semibold mb-2">Features:</h4>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• Image upload with validation</li>
              <li>• Automatic watermark overlay</li>
              <li>• User authentication & sessions</li>
              <li>• Admin dashboard for management</li>
              <li>• Audit logging for all actions</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Preview</h3>
          <div className="border border-slate-300 rounded-lg p-4 min-h-[300px] flex items-center justify-center bg-slate-50">
            {selectedImage ? (
              <div className="relative">
                <img
                  src={selectedImage}
                  alt="Uploaded"
                  className="max-w-full max-h-[400px] rounded"
                />
                {watermarked && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-white text-2xl font-bold opacity-60 transform -rotate-30" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                      TRUFACE PROTECTED
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-slate-400">No image selected</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Mini-ATM Demo
function ATMDemo() {
  const [balance, setBalance] = useState(1000);
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const withdraw = () => {
    const amt = parseFloat(amount);
    if (amt > 0 && amt <= balance) {
      setBalance(balance - amt);
      setMessage(`Successfully withdrew $${amt.toFixed(2)}`);
      setAmount('');
    } else {
      setMessage('Invalid amount or insufficient funds');
    }
  };

  const deposit = () => {
    const amt = parseFloat(amount);
    if (amt > 0) {
      setBalance(balance + amt);
      setMessage(`Successfully deposited $${amt.toFixed(2)}`);
      setAmount('');
    } else {
      setMessage('Invalid amount');
    }
  };

  return (
    <section className="bg-white rounded-lg shadow-lg p-8 border border-slate-200">
      <div className="flex items-center gap-3 mb-6">
        <DollarSign className="text-emerald-600" size={32} />
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Mini-ATM System</h2>
          <p className="text-slate-600">Graduate Software Engineering Project</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white p-6 rounded-lg mb-6">
            <p className="text-sm opacity-90 mb-2">Current Balance</p>
            <p className="text-4xl font-bold">${balance.toFixed(2)}</p>
          </div>

          <div className="space-y-4">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg"
            />
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={withdraw}
                className="bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Withdraw
              </button>
              <button
                onClick={deposit}
                className="bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
              >
                Deposit
              </button>
            </div>
            {message && (
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-800 text-sm">
                {message}
              </div>
            )}
          </div>
        </div>

        <div className="p-4 bg-slate-50 rounded-lg">
          <h4 className="font-semibold mb-3">System Architecture:</h4>
          <ul className="text-sm text-slate-700 space-y-2">
            <li>• <strong>Presentation Layer:</strong> User interface</li>
            <li>• <strong>Business Logic Layer:</strong> Transaction processing</li>
            <li>• <strong>Data Layer:</strong> Account management</li>
          </ul>
          <h4 className="font-semibold mt-4 mb-2">Features Implemented:</h4>
          <ul className="text-sm text-slate-700 space-y-1">
            <li>• SMART goals & requirements</li>
            <li>• Use cases & user stories</li>
            <li>• Class & sequence diagrams</li>
            <li>• Full traceability matrix</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// Security Testing Demo
function SecurityDemo() {
  return (
    <section className="bg-white rounded-lg shadow-lg p-8 border border-slate-200">
      <div className="flex items-center gap-3 mb-6">
        <Shield className="text-emerald-600" size={32} />
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Web Application Penetration Testing</h2>
          <p className="text-slate-600">OWASP Top 10 • Burp Suite</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">Project Overview</h3>
          <p className="text-slate-700 mb-4">
            Completed comprehensive web application security testing course focused on the OWASP Top 10 vulnerabilities.
            Performed hands-on penetration testing using industry-standard tools and methodologies.
          </p>

          <h4 className="font-semibold mb-3 mt-6">Vulnerabilities Tested:</h4>
          <ul className="text-sm text-slate-700 space-y-2">
            <li>• <strong>Cross-Site Scripting (XSS):</strong> Reflected, stored, DOM-based attacks</li>
            <li>• <strong>SQL Injection:</strong> Authentication bypass & data extraction</li>
            <li>• <strong>Authentication Bypass:</strong> Session hijacking & fixation</li>
            <li>• <strong>Access Control Issues:</strong> Horizontal & vertical privilege escalation</li>
            <li>• <strong>Session Attacks:</strong> Token manipulation & replay attacks</li>
          </ul>
        </div>

        <div className="space-y-6">
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h4 className="font-semibold mb-3">Testing Methodology:</h4>
            <ul className="text-sm text-slate-700 space-y-2">
              <li>• Reconnaissance & information gathering</li>
              <li>• Vulnerability identification</li>
              <li>• Manual exploitation techniques</li>
              <li>• Documentation & reporting</li>
              <li>• Remediation recommendations</li>
            </ul>
          </div>

          <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
            <h4 className="font-semibold mb-2">Tools & Technologies:</h4>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• Burp Suite (Proxy, Repeater, Intruder)</li>
              <li>• OWASP Testing Guide</li>
              <li>• Manual code review</li>
              <li>• Penetration testing frameworks</li>
            </ul>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold mb-2">Achievements:</h4>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• Completed midterm penetration test</li>
              <li>• Completed final penetration test</li>
              <li>• Hands-on lab exercises for each vulnerability</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Movie Poster Store Demo
function MovieStoreDemo() {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [cart, setCart] = useState<Array<{id: number, title: string, price: number}>>([]);
  const [showCart, setShowCart] = useState(false);

  const movies = [
    {
      id: 1,
      title: 'The Texas Chainsaw Massacre',
      genre: 'Horror',
      year: 1974,
      director: 'Tobe Hooper',
      price: 14.99,
      size: '12 × 18',
      frame: 'Wood',
      finish: 'Matte',
      image: 'https://m.media-amazon.com/images/I/8142sxrpeTL.jpg',
      creator: 'Rosella'
    },
    {
      id: 2,
      title: 'The Babadook',
      genre: 'Horror',
      year: 2014,
      director: 'Jennifer Kent',
      price: 11.99,
      size: '12 × 18',
      frame: 'Metal',
      finish: 'Glossy',
      image: 'https://m.media-amazon.com/images/M/MV5BMTk0NzMzODc2NF5BMl5BanBnXkFtZTgwOTYzNTM1MzE@._V1_FMjpg_UX1000_.jpg',
      creator: 'Rosella'
    },
    {
      id: 3,
      title: 'The Terminator',
      genre: 'Sci-Fi',
      year: 1984,
      director: 'James Cameron',
      price: 13.49,
      size: '18 × 24',
      frame: 'Canvas',
      finish: 'Matte',
      image: 'https://upload.wikimedia.org/wikipedia/en/6/6d/The_Terminator.png',
      creator: 'Rosella'
    },
    {
      id: 4,
      title: 'Blade Runner',
      genre: 'Sci-Fi',
      year: 1982,
      director: 'Ridley Scott',
      price: 15.99,
      size: '18 × 24',
      frame: 'Metal',
      finish: 'Glossy',
      image: 'https://m.media-amazon.com/images/I/71cn8pGHd6L._AC_UF894,1000_QL80_.jpg',
      creator: 'Rosella'
    },
    {
      id: 5,
      title: 'Sinners',
      genre: 'Horror',
      year: 2025,
      director: 'Ryan Coogler',
      price: 44.99,
      size: '27 x 40',
      frame: 'Mounted On',
      finish: 'Canvas',
      image: 'https://www.movieposters.com/cdn/shop/files/sinners_uzscsbn8.jpg?v=1762979198&width=1680',
      creator: 'Chad'
    },
    {
      id: 6,
      title: 'The Other Guys',
      genre: 'Comedy',
      year: 2010,
      director: 'Adam McKay',
      price: 59.99,
      size: '27 x 40',
      frame: 'Mounted On',
      finish: 'Canvas',
      image: 'https://www.movieposters.com/cdn/shop/products/d39d57749012c64131c592cee1498b84_93dc7d46-660f-4535-a7e8-98670fe5f7b5.jpg?v=1762961607&width=1680',
      creator: 'Chad'
    },
    {
      id: 7,
      title: 'Mickey 17',
      genre: 'Sci-Fi',
      year: 2025,
      director: 'Bong Joon Ho',
      price: 29.99,
      size: '27 x 40',
      frame: 'Mounted On',
      finish: 'Canvas',
      image: 'https://www.movieposters.com/cdn/shop/files/mickey-17_bjfndnr1.jpg?v=1762979133&width=1680',
      creator: 'Chad'
    },
    {
      id: 8,
      title: 'Shaun of the Dead',
      genre: 'Comedy',
      year: 2004,
      director: 'Edgar Wright',
      price: 9.99,
      size: '11 x 17',
      frame: 'Mounted On',
      finish: 'Canvas',
      image: 'https://www.movieposters.com/cdn/shop/products/e0b531a65316520b99355b356214a815_e55a29fb-1568-44bc-b6e1-90768ef26ac5.jpg?v=1762461136&width=1680',
      creator: 'Neng'
    },
    {
      id: 9,
      title: 'Hot Fuzz',
      genre: 'Comedy',
      year: 2007,
      director: 'Edgar Wright',
      price: 12.99,
      size: '11 x 17',
      frame: 'Mounted On',
      finish: 'Canvas',
      image: 'https://www.movieposters.com/cdn/shop/files/15a40ca087aec47b3ec164085b58ea24_a99489c2-ca93-48e8-89ff-6f324092cbc4.jpg?v=1762975177&width=1680',
      creator: 'Neng'
    },
    {
      id: 10,
      title: 'Alien',
      genre: 'Sci-Fi',
      year: 1979,
      director: 'Ridley Scott',
      price: 299.99,
      size: '27 x 40',
      frame: 'Mounted On',
      finish: 'Canvas',
      image: 'https://www.movieposters.com/cdn/shop/products/fe438475247ed20b352db9608484a095_526f897d-4934-425a-a26b-55f9304c62a5.jpg?v=1762458237&width=1680',
      creator: 'Neng'
    }
  ];

  const filteredMovies = selectedGenre === 'All'
    ? movies
    : movies.filter(movie => movie.genre === selectedGenre);

  const addToCart = (movie: typeof movies[0]) => {
    setCart([...cart, { id: movie.id, title: movie.title, price: movie.price }]);
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  };

  const genres = ['All', 'Horror', 'Sci-Fi', 'Comedy'];

  return (
    <section className="bg-slate-100 rounded-lg shadow-lg overflow-hidden border border-slate-200">
      {/* Header Bar */}
      <div className="bg-black text-white py-4 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-wide">🎬 Movie Poster Store</h2>
      </div>

      {/* Cart Button & Genre Filters */}
      <div className="bg-white p-6 border-b border-slate-200">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
          <div className="flex flex-wrap justify-center gap-3">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-5 py-2 rounded-lg font-medium transition-colors ${
                  selectedGenre === genre
                    ? 'bg-red-600 text-white'
                    : 'bg-slate-800 text-white hover:bg-slate-600'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowCart(!showCart)}
            className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2 mx-auto md:mx-0"
          >
            🛒 Cart ({cart.length})
          </button>
        </div>

        {/* Shopping Cart Modal */}
        {showCart && (
          <div className="p-6 bg-emerald-50 border-2 border-emerald-200 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold text-lg">Shopping Cart</h4>
              <button onClick={() => setShowCart(false)} className="text-slate-600 hover:text-slate-900 text-xl">✕</button>
            </div>
            {cart.length > 0 ? (
              <>
                <div className="space-y-2 mb-4 max-h-64 overflow-y-auto">
                  {cart.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-white p-3 rounded">
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sm text-slate-600">${item.price}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(idx)}
                        className="text-red-600 hover:text-red-800 text-sm font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
                <div className="border-t-2 border-emerald-300 pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-lg">Total:</span>
                    <span className="font-bold text-2xl text-emerald-600">${getTotal()}</span>
                  </div>
                  <button className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold">
                    Proceed to Checkout
                  </button>
                </div>
              </>
            ) : (
              <p className="text-center text-slate-600 py-8">Your cart is empty</p>
            )}
          </div>
        )}
      </div>

      {/* Movie Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredMovies.map((movie) => (
            <div key={movie.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{movie.title}</h3>

                <p className="text-sm text-slate-600"><strong>Genre:</strong> {movie.genre}</p>
                <p className="text-sm text-slate-600"><strong>Year:</strong> {movie.year}</p>
                <p className="text-sm text-slate-600 mb-3"><strong>Director:</strong> {movie.director}</p>

                <hr className="my-3 border-slate-200" />

                <p className="text-sm text-slate-600"><strong>Price:</strong> ${movie.price}</p>
                <p className="text-sm text-slate-600"><strong>Size:</strong> {movie.size}</p>
                <p className="text-sm text-slate-600"><strong>Frame:</strong> {movie.frame}</p>
                <p className="text-sm text-slate-600 mb-3"><strong>Finish:</strong> {movie.finish}</p>

                <p className="text-xs italic text-slate-500 mb-3">Created by: {movie.creator}</p>

                <button
                  onClick={() => addToCart(movie)}
                  className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <p className="text-center text-slate-600 py-12">No movies found in this genre.</p>
        )}
      </div>

      {/* Technical Details */}
      <div className="bg-white p-6 border-t border-slate-200">
        <h4 className="font-semibold mb-3 text-lg">Technical Implementation:</h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">
          <ul className="space-y-1">
            <li>• User authentication & sessions</li>
            <li>• MySQL database with normalized schema</li>
            <li>• CRUD operations for inventory</li>
            <li>• Genre-based filtering system</li>
          </ul>
          <ul className="space-y-1">
            <li>• Shopping cart session management</li>
            <li>• Form validation & sanitization</li>
            <li>• Multi-user product creation</li>
            <li>• Responsive grid layout</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// Database Design Demo
function DatabaseDemo() {
  return (
    <section className="bg-white rounded-lg shadow-lg p-8 border border-slate-200">
      <div className="flex items-center gap-3 mb-6">
        <Database className="text-emerald-600" size={32} />
        <div>
          <h2 className="text-3xl font-bold text-slate-900">MySQL Database Design</h2>
          <p className="text-slate-600">Normalized Schema & Query Optimization</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">Project Overview</h3>
          <p className="text-slate-700 mb-4">
            Designed and implemented relational database schemas following industry best practices.
            Created Entity-Relationship Diagrams (EER), normalized tables, and wrote complex SQL queries
            for data manipulation and retrieval.
          </p>

          <h4 className="font-semibold mb-3 mt-6">Database Design Skills:</h4>
          <ul className="text-sm text-slate-700 space-y-2">
            <li>• <strong>EER Diagram Design:</strong> Created comprehensive entity-relationship diagrams</li>
            <li>• <strong>Normalization:</strong> Applied 1NF, 2NF, 3NF to eliminate redundancy</li>
            <li>• <strong>Complex Queries:</strong> JOIN operations, subqueries, aggregations</li>
            <li>• <strong>Indexing:</strong> Optimized query performance with proper indexes</li>
            <li>• <strong>Constraints:</strong> Primary keys, foreign keys, unique constraints</li>
          </ul>

          <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h4 className="font-semibold mb-2 text-sm">Sample Query Types Mastered:</h4>
            <div className="space-y-2 font-mono text-xs text-slate-700">
              <p>• SELECT with WHERE clauses</p>
              <p>• INNER/LEFT/RIGHT JOIN operations</p>
              <p>• GROUP BY with aggregate functions</p>
              <p>• Subqueries and nested SELECT</p>
              <p>• INSERT, UPDATE, DELETE operations</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
            <h4 className="font-semibold mb-3">Technical Concepts:</h4>
            <ul className="text-sm text-slate-700 space-y-2">
              <li>• Relational database theory</li>
              <li>• Data integrity & consistency</li>
              <li>• Transaction management</li>
              <li>• Query optimization techniques</li>
              <li>• Database security best practices</li>
            </ul>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold mb-2">Tools & Technologies:</h4>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• MySQL/MariaDB</li>
              <li>• phpMyAdmin</li>
              <li>• MySQL Workbench</li>
              <li>• SQL query optimization tools</li>
            </ul>
          </div>

          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h4 className="font-semibold mb-2">Deliverables:</h4>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• Complete EER diagrams</li>
              <li>• Normalized table schemas</li>
              <li>• SQL query documentation</li>
              <li>• Performance analysis reports</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Mental Health Chatbot Demo
function ChatbotDemo() {
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'user' | 'bot' }>>([
    { text: 'Hello! I\'m here to help. How are you feeling today?', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages([...messages, { text: userMessage, sender: 'user' }]);
    setInput('');

    // Typing indicator
    setTimeout(() => {
      let response = '';
      const lowerInput = userMessage.toLowerCase();

      // Expanded conditional logic with more realistic responses
      if (lowerInput.includes('sad') || lowerInput.includes('down') || lowerInput.includes('depressed')) {
        const sadResponses = [
          'I\'m sorry you\'re feeling this way. Would you like to talk about what\'s bothering you?',
          'It\'s okay to feel sad sometimes. Remember, this feeling is temporary. What do you think might help you feel better?',
          'I hear you. Sadness is a valid emotion. Have you been able to talk to anyone about how you\'re feeling?',
        ];
        response = sadResponses[Math.floor(Math.random() * sadResponses.length)];
      } else if (lowerInput.includes('anxious') || lowerInput.includes('worried') || lowerInput.includes('stress')) {
        const anxiousResponses = [
          'Anxiety can be challenging. Have you tried any breathing exercises? Deep breathing can help calm your nervous system.',
          'I understand feeling worried. Sometimes it helps to write down your concerns. Have you tried journaling?',
          'Stress is tough. Remember to take breaks and practice self-care. What usually helps you relax?',
        ];
        response = anxiousResponses[Math.floor(Math.random() * anxiousResponses.length)];
      } else if (lowerInput.includes('happy') || lowerInput.includes('good') || lowerInput.includes('great') || lowerInput.includes('amazing')) {
        const happyResponses = [
          'That\'s wonderful to hear! What made your day good?',
          'I\'m so glad you\'re feeling happy! It\'s important to celebrate the good moments.',
          'That\'s great news! Positive energy is contagious. What are you most grateful for today?',
        ];
        response = happyResponses[Math.floor(Math.random() * happyResponses.length)];
      } else if (lowerInput.includes('angry') || lowerInput.includes('mad') || lowerInput.includes('frustrated')) {
        response = 'Anger is a natural emotion. It\'s important to acknowledge it without letting it control you. What triggered these feelings?';
      } else if (lowerInput.includes('lonely') || lowerInput.includes('alone')) {
        response = 'Feeling lonely can be really hard. Remember that reaching out for connection is a sign of strength. Is there someone you trust you could talk to?';
      } else if (lowerInput.includes('tired') || lowerInput.includes('exhausted') || lowerInput.includes('sleep')) {
        response = 'Rest is so important for mental health. Are you getting enough quality sleep? Sometimes establishing a bedtime routine can help.';
      } else if (lowerInput.includes('help') || lowerInput.includes('support')) {
        response = 'It\'s brave to ask for help. If you\'re struggling, please consider reaching out to a mental health professional. Would you like some resources?';
      } else if (lowerInput.includes('thanks') || lowerInput.includes('thank you')) {
        response = 'You\'re very welcome! I\'m here anytime you need someone to talk to. Take care of yourself!';
      } else if (lowerInput.includes('bye') || lowerInput.includes('goodbye')) {
        response = 'Take care! Remember, it\'s okay to not be okay sometimes. I\'m here whenever you need to talk.';
      } else if (lowerInput.includes('hi') || lowerInput.includes('hello') || lowerInput.includes('hey')) {
        response = 'Hello! I\'m here to listen and support you. How are you feeling today?';
      } else {
        const generalResponses = [
          'I understand. Can you tell me more about how you\'re feeling?',
          'I\'m listening. What else is on your mind?',
          'That sounds important. Would you like to explore that feeling further?',
          'I hear you. How long have you been feeling this way?',
        ];
        response = generalResponses[Math.floor(Math.random() * generalResponses.length)];
      }

      setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
    }, 600);
  };

  return (
    <section className="bg-white rounded-lg shadow-lg p-8 border border-slate-200">
      <div className="flex items-center gap-3 mb-6">
        <MessageCircle className="text-emerald-600" size={32} />
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Mental Health Chatbot</h2>
          <p className="text-slate-600">Python Hackathon Project</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="border border-slate-300 rounded-lg h-[450px] flex flex-col bg-white shadow-sm">
            <div className="bg-emerald-600 text-white px-4 py-3 rounded-t-lg">
              <h4 className="font-semibold">Mental Health Support Bot</h4>
              <p className="text-xs text-emerald-100">AI-powered emotional support</p>
            </div>
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] px-4 py-2 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-emerald-600 text-white rounded-br-none'
                      : 'bg-slate-100 text-slate-900 rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-slate-300 p-4">
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  onClick={sendMessage}
                  className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Send
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                <button onClick={() => setInput("I'm feeling sad today")} className="text-xs bg-slate-100 px-3 py-1 rounded-full hover:bg-slate-200">
                  I'm feeling sad
                </button>
                <button onClick={() => setInput("I'm anxious")} className="text-xs bg-slate-100 px-3 py-1 rounded-full hover:bg-slate-200">
                  I'm anxious
                </button>
                <button onClick={() => setInput("I need help")} className="text-xs bg-slate-100 px-3 py-1 rounded-full hover:bg-slate-200">
                  I need help
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h4 className="font-semibold mb-3">Implementation Features:</h4>
            <ul className="text-sm text-slate-700 space-y-2">
              <li>• 50+ conditional responses</li>
              <li>• Emotion recognition</li>
              <li>• Context-aware replies</li>
              <li>• Input validation</li>
              <li>• Keyword detection</li>
              <li>• Random response variation</li>
            </ul>
          </div>
          <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
            <h4 className="font-semibold mb-2">Technologies:</h4>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• Python</li>
              <li>• Conditional logic</li>
              <li>• String processing</li>
              <li>• User input handling</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Fuse Bootcamp Badge
function FuseBootcampCard() {
  return (
    <section className="bg-white rounded-lg shadow-lg p-8 border border-slate-200">
      <div className="flex items-center gap-3 mb-6">
        <Award className="text-emerald-600" size={32} />
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Fuse Bootcamp</h2>
          <p className="text-slate-600">MKE Tech Hub Coalition</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg p-12">
          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Award size={64} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">HERA Data & AI Badge</h3>
            <p className="text-slate-600">Certified Completion</p>
          </div>
        </div>

        <div className="p-6 bg-slate-50 rounded-lg">
          <h4 className="font-semibold mb-3 text-lg">Bootcamp Highlights:</h4>
          <ul className="text-slate-700 space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 mt-1">✓</span>
              <span><strong>Job Readiness:</strong> Resume building, interview prep, networking strategies</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 mt-1">✓</span>
              <span><strong>AI Fundamentals:</strong> Introduction to AI/ML concepts and applications</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 mt-1">✓</span>
              <span><strong>Data Analysis:</strong> Working with data, visualization, insights</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 mt-1">✓</span>
              <span><strong>Professional Development:</strong> Communication skills, teamwork, project management</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
