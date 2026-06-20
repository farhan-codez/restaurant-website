const menuItems = [
  { name: 'Bruschetta', category: 'appetizer', price: 8.99, image: 'pexels-rachel-claire-5863618.jpg' },
  { name: 'Stuffed Mushrooms', category: 'appetizer', price: 10.49, image: 'pexels-erikanuor-12263086.jpg' },
  { name: 'Calamari', category: 'appetizer', price: 11.99, image: 'pexels-filipp-romanovski-297235844-20185224.jpg' },
  { name: 'Grilled Salmon', category: 'main', price: 22.99, image: 'pexels-hannah-barata-776560167-28128244.jpg' },
  { name: 'Steak Frites', category: 'main', price: 26.99, image: 'pexels-keesha-s-kitchen-22731136-13915043.jpg' },
  { name: 'Pasta Carbonara', category: 'main', price: 17.99, image: 'pexels-davegarcia-33432667.jpg' },
  { name: 'Chicken Marsala', category: 'main', price: 19.99, image: 'pexels-saizstudio-17952748.jpg' },
  { name: 'Tiramisu', category: 'dessert', price: 8.49, image: 'pexels-shalom-dare-342799635-14079234.jpg' },
  { name: 'Panna Cotta', category: 'dessert', price: 7.99, image: 'pexels-szymon-shields-1503561-33033777.jpg' },
  { name: 'Gelato Trio', category: 'dessert', price: 9.49, image: 'pexels-szymon-shields-1503561-33033817.jpg' },
];

const menuGrid = document.getElementById('menuGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contactForm');

function renderMenu(filter = 'all') {
  menuGrid.innerHTML = '';
  const filtered = filter === 'all' ? menuItems : menuItems.filter(item => item.category === filter);

  filtered.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.innerHTML = `
      <div class="card-img" style="background-image: url('images/${item.image}')"></div>
      <div class="card-body">
        <h3>${item.name}</h3>
        <p class="price">₵${item.price.toFixed(2)}</p>
      </div>
    `;
    menuGrid.appendChild(card);

    requestAnimationFrame(() => {
      setTimeout(() => card.classList.add('show'), i * 80);
    });
  });
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderMenu(btn.dataset.filter);
  });
});

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

contactForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email}.`);
    contactForm.reset();
  }
});

renderMenu();
