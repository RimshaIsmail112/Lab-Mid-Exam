// Mobile Menu Toggle
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
  }
  
  // Featured Artists Data
  const artists = [
    { name: 'Artist 1', bio: 'A talented artist known for...', image: 'artist1.jpg' },
    { name: 'Artist 2', bio: 'An inspiring musician...', image: 'artist2.jpg' },
    { name: 'Artist 3', bio: 'A rising star...', image: 'artist3.jpg' }
  ];
  
  // Populate Featured Artists
  function loadArtists() {
    const container = document.getElementById('speakers-container');
    artists.forEach(artist => {
      const artistDiv = document.createElement('div');
      artistDiv.className = 'artist';
      artistDiv.innerHTML = `
        <img src="${artist.image}" alt="${artist.name}">
        <h3>${artist.name}</h3>
        <p>${artist.bio}</p>
      `;
      container.appendChild(artistDiv);
    });
  }
  
  // Initialize Page Content
  document.addEventListener('DOMContentLoaded', loadArtists);
  