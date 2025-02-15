const medicines = [
  { "name": "Paracetamol", "category": "Fever", "price": 5 },
  { "name": "Ibuprofen", "category": "Pain Relief", "price": 8 },
  { "name": "Cough Syrup", "category": "Cough", "price": 6 },
  { "name": "Antacid Tablets", "category": "Stomach Pain", "price": 4 },
  { "name": "Vitamin C", "category": "Immunity Booster", "price": 7 },
  { "name": "Aspirin", "category": "Pain Relief", "price": 10 },
  { "name": "Amoxicillin", "category": "Antibiotic", "price": 40 },
  { "name": "Cetirizine", "category": "Allergy", "price": 15 },
  { "name": "Dolo 650", "category": "Fever", "price": 25 },
  { "name": "Metformin", "category": "Diabetes", "price": 30 },
  { "name": "Paracetamol 500mg", "category": "Fever", "price": 10 },
  { "name": "Clindamycin", "category": "Antibiotic", "price": 35 },
  { "name": "Loratadine", "category": "Allergy", "price": 20 },
  { "name": "Omeprazole", "category": "Acid Reflux", "price": 25 },
  { "name": "Syrup Levocetirizine", "category": "Allergy", "price": 35 },
  { "name": "Loperamide", "category": "Diarrhea", "price": 15 },
  { "name": "Calcium D3", "category": "Immunity Booster", "price": 50 },
  { "name": "Fexofenadine", "category": "Allergy", "price": 20 },
  { "name": "Diphenhydramine", "category": "Cough", "price": 18 },
  { "name": "Tamsulosin", "category": "Urinary Health", "price": 70 },
  { "name": "Bromhexine", "category": "Cough", "price": 15 },
  { "name": "Levothyroxine", "category": "Thyroid", "price": 80 },
  { "name": "Prednisolone", "category": "Inflammation", "price": 40 },
  { "name": "Fluconazole", "category": "Antifungal", "price": 55 },
  { "name": "Sildenafil", "category": "ED", "price": 80 },
  { "name": "Esomeprazole", "category": "Acid Reflux", "price": 50 },
  { "name": "Zinc Supplements", "category": "Immunity Booster", "price": 20 },
  { "name": "Ranitidine", "category": "Acid Reflux", "price": 30 },
  { "name": "Fluoxetine", "category": "Mental Health", "price": 60 },
  { "name": "Bupropion", "category": "Mental Health", "price": 80 },
  { "name": "Dexamethasone", "category": "Inflammation", "price": 50 },
  { "name": "Glibenclamide", "category": "Diabetes", "price": 25 },
  { "name": "Losartan", "category": "Blood Pressure", "price": 45 },
  { "name": "Telmisartan", "category": "Blood Pressure", "price": 55 },
  { "name": "Carbimazole", "category": "Thyroid", "price": 65 },
  { "name": "Hydrochlorothiazide", "category": "Blood Pressure", "price": 30 },
  { "name": "Alprazolam", "category": "Mental Health", "price": 40 },
  { "name": "Ciprofloxacin", "category": "Antibiotic", "price": 50 },
  { "name": "Azithromycin", "category": "Antibiotic", "price": 60 },
  { "name": "Lisinopril", "category": "Blood Pressure", "price": 70 },
  { "name": "Amlodipine", "category": "Blood Pressure", "price": 40 },
  { "name": "Salbutamol", "category": "Asthma", "price": 35 },
  { "name": "Montelukast", "category": "Asthma", "price": 50 },
  { "name": "Nitroglycerin", "category": "Heart", "price": 60 },
  { "name": "Digoxin", "category": "Heart", "price": 75 },
  { "name": "Vitamin D3", "category": "Immunity Booster", "price": 25 },
  { "name": "Hydroxychloroquine", "category": "Antimalarial", "price": 100 },
  { "name": "Quinine", "category": "Antimalarial", "price": 80 },
  { "name": "Amoxiclav", "category": "Antibiotic", "price": 90 },
  { "name": "Mebendazole", "category": "Worms", "price": 40 },
  { "name": "Ivermectin", "category": "Worms", "price": 50 },
  { "name": "Baclofen", "category": "Muscle Relaxant", "price": 60 },
  { "name": "Amitriptyline", "category": "Mental Health", "price": 80 },
  { "name": "Citalopram", "category": "Mental Health", "price": 70 },
  { "name": "Sodium Bicarbonate", "category": "Acid Reflux", "price": 10 },
  { "name": "Guaifenesin", "category": "Cough", "price": 25 },
  { "name": "Betamethasone", "category": "Inflammation", "price": 40 },
  { "name": "Naproxen", "category": "Pain Relief", "price": 35 },
  { "name": "Ketoconazole", "category": "Antifungal", "price": 50 },
  { "name": "Tetracycline", "category": "Antibiotic", "price": 30 },
  { "name": "Methotrexate", "category": "Cancer", "price": 100 },
  { "name": "Vincristine", "category": "Cancer", "price": 150 },
  { "name": "Doxorubicin", "category": "Cancer", "price": 200 },
  { "name": "Methyldopa", "category": "Blood Pressure", "price": 40 },
  { "name": "Enalapril", "category": "Blood Pressure", "price": 50 },
  { "name": "Warfarin", "category": "Blood Thinner", "price": 90 },
  { "name": "Clopidogrel", "category": "Blood Thinner", "price": 75 },
  { "name": "Hydroxyurea", "category": "Cancer", "price": 150 },
  { "name": "Propranolol", "category": "Blood Pressure", "price": 50 },
  { "name": "Carvedilol", "category": "Blood Pressure", "price": 55 },
  { "name": "Alendronate", "category": "Osteoporosis", "price": 90 },
  { "name": "Furosemide", "category": "Blood Pressure", "price": 40 },
  { "name": "Risperidone", "category": "Mental Health", "price": 80 },
  { "name": "Aripiprazole", "category": "Mental Health", "price": 100 },
  { "name": "Fluphenazine", "category": "Mental Health", "price": 150 },
  { "name": "Candesartan", "category": "Blood Pressure", "price": 85 },
  { "name": "Losartan Potassium", "category": "Blood Pressure", "price": 60 },
  { "name": "Sodium Chloride", "category": "Electrolyte", "price": 20 },
  { "name": "Magnesium Sulfate", "category": "Electrolyte", "price": 30 },
  { "name": "Potassium Chloride", "category": "Electrolyte", "price": 40 },
  { "name": "Thiamine", "category": "Vitamin", "price": 25 },
  { "name": "Riboflavin", "category": "Vitamin", "price": 15 },
  { "name": "Niacin", "category": "Vitamin", "price": 20 },
  { "name": "Vitamin B12", "category": "Vitamin", "price": 50 },
  { "name": "Vitamin E", "category": "Vitamin", "price": 30 },
  { "name": "Iron Supplements", "category": "Mineral", "price": 25 },
  { "name": "Magnesium", "category": "Mineral", "price": 35 },
  { "name": "Calcium", "category": "Mineral", "price": 40 },
  { "name": "Sodium Bicarbonate", "category": "Antacid", "price": 10 },
  { "name": "Atenolol", "category": "Blood Pressure", "price": 40 },
  { "name": "Metoprolol", "category": "Blood Pressure", "price": 50 },
  { "name": "Doxazosin", "category": "Blood Pressure", "price": 60 },
  { "name": "Tadalafil", "category": "ED", "price": 90 },
  { "name": "Vardenafil", "category": "ED", "price": 80 },
  { "name": "Naltrexone", "category": "Addiction", "price": 70 },
  { "name": "Methadone", "category": "Addiction", "price": 60 },
  { "name": "Acetazolamide", "category": "Diuretic", "price": 30 },
  { "name": "Chlorothiazide", "category": "Diuretic", "price": 40 },
  { "name": "Spironolactone", "category": "Diuretic", "price": 50 }
];

let cart = [];

function displayMedicines() {
  const grid = document.querySelector(".product-grid");
  grid.innerHTML = "";
  medicines.forEach((med, index) => {
    grid.innerHTML += `
        <div class="product-card">
          <h3>${med.name}</h3>
          <p>Category: ${med.category}</p>
          <p>Price: ₹${med.price}</p>
          <button class="buy" onclick="addToCart(${index})">🛒 Add to Cart</button>
        </div>
      `;
  });
}


function searchMedicine() {
  const query = document.getElementById("search").value.toLowerCase();
  const filtered = medicines.filter(med =>
    med.name.toLowerCase().includes(query) ||
    med.category.toLowerCase().includes(query)
  );
  displayFilteredMedicines(filtered);
}

function displayFilteredMedicines(filtered) {
  const grid = document.querySelector(".product-grid");
  grid.innerHTML = "";
  filtered.forEach((med, index) => {
    grid.innerHTML += `
        <div class="product-card">
          <h3>${med.name}</h3>
          <p>Category: ${med.category}</p>
          <p>Price: ₹${med.price}</p>
          <button class="buy" onclick="addToCart(${index})">🛒 Add to Cart</button>
        </div>
      `;
  });
}

function addToCart(index) {
  cart.push(medicines[index]);
  document.getElementById("cart-count").textContent = cart.length;

  // Save updated cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
}

function openCart() {
  const cartModal = document.getElementById("cartModal");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    cartItems.innerHTML += `<li>${item.name} - ₹${item.price} <button onclick="removeFromCart(${index})">❌</button></li>`;
  });

  cartTotal.textContent = total;
  cartModal.style.display = "block";
}

function removeFromCart(index) {
  cart.splice(index, 1);
  document.getElementById("cart-count").textContent = cart.length;
  openCart();
}

function closeCart() {
  document.getElementById("cartModal").style.display = "none";
}

function checkout() {
  window.location.href = "checkout.html";
}

document.querySelector(".cart").addEventListener("click", openCart);
displayMedicines();
