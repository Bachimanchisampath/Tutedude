const suppliers = [
  {
    name: "Ramu Traders",
    area: "mumbai",
    categories: ["rice", "oil"],
    image: "https://content3.jdmagicbox.com/v2/comp/hyderabad/b8/040pxx40.xx40.150707095706.t9b8/catalogue/manikanta-rice-oil-traders-kothapet-hyderabad-rice-wholesalers-b36zc.jpg",
    products: [
      { name: "Rice", price: "₹30/kg" },
      { name: "Sunflower Oil", price: "₹110/litre" },
      { name: "Groundnut Oil", price: "₹110/litre" },
      { name: "Palm Oil", price: "₹110/litre" },
      { name: "Ghee", price: "₹130/litre" }
    ],
    phone: "9123456789",
    whatsapp: "9123456789"
  },
  {
    name: "Shankar Spices",
    area: "delhi",
    categories: ["spices"],
    image: "https://i.pinimg.com/736x/a4/ba/43/a4ba4312710012c57c9c6c9c066f86f1.jpg",
    products: [
      { name: "Garam Masala", price: "₹120/kg" },
      { name: "Clove", price: "₹120/kg" },
      { name: "Cardomom", price: "₹120/kg" },
      { name: "Cinnamon", price: "₹120/kg" },
      { name: "Pepper", price: "₹120/kg" },
      { name: "Salt", price: "₹120/kg" },
      { name: "Chilli Powder", price: "₹120/kg" },
      { name: "Ajino Moto", price: "₹120/kg" },
      { name: "Bay Leaf", price: "₹120/kg" },
    ],
    phone: "9876543210",
    whatsapp: "9876543210"
  },
  {
    name: "OilMart",
    area: "mumbai",
    categories: ["oil"],
    image: "https://c8.alamy.com/comp/B213D7/cooking-oils-in-supermarket-china-the-chinese-use-a-lot-of-edible-B213D7.jpg",
    products: [
      { name: "Sunflower Oil", price: "₹110/litre" },
      { name: "Groundnut Oil", price: "₹110/litre" },
      { name: "Palm Oil", price: "₹110/litre" },
    ],
    phone: "9440423283",
    whatsapp: "9440423283"
  },
  {
    name: "Raj Vegetable Supply",
    area: "mumbai",
    categories: ["vegetables"],
    image: "https://content.jdmagicbox.com/comp/def_content/vegetable-vendors/shutterstock-130707287-vegetable-vendors-3-bils7.jpg",
    products: [
      { name: "Onion", price: "₹30/kg" },
      { name: "Potato", price: "₹25/kg" },
      { name: "Coriander", price: "₹20/bunch" },
      { name: "Tomato", price: "₹35/kg" },
      { name: "Cabbage", price: "₹30/piece" },
      { name: "Carrot", price: "₹40/kg" },
    ],
    phone: "9391716441",
    whatsapp: "9391716441"
  },
  {
    name: "Fresh Dairy Farm Delhi",
    area: "delhi",
    categories: ["vegetables"],
    image: "https://tiimg.tistatic.com/fp/1/004/887/fresh-dairy-milk-is-rich-in-protein-371.jpg",
    products: [
      { name: "Beans", price: "₹35/kg" },
      { name: "Capsicum", price: "₹45/kg" },
      { name: "Beetroot", price: "₹30/kg" },
      { name: "Bottle Gourd", price: "₹25/kg" }
    ],
    phone: "9991112233",
    whatsapp: "9991112233"
  },
  {
    name: "Bharat Masala Bhandar",
    area: "mumbai",
    categories: ["spices"],
    image: "https://content.jdmagicbox.com/comp/def_content/spice-retailers/shutterstock-169737956-spice-retailers-2-l3r0v.jpg",
    products: [
      { name: "Turmeric", price: "₹90/kg" },
      { name: "Mustard Seeds", price: "₹70/kg" },
      { name: "Fenugreek", price: "₹80/kg" },
      { name: "Dry Red Chillies", price: "₹100/kg" }
    ],
    phone: "8888877777",
    whatsapp: "8888877777"
  }
];

function displaySuppliers() {
  const areaFilter = document.getElementById("areaFilter").value;
  const categoryFilter = document.getElementById("categoryFilter").value;
  const list = document.getElementById("supplierList");
  list.innerHTML = "";

  const filtered = suppliers.filter(supplier =>
    (areaFilter === "all" || supplier.area === areaFilter) &&
    (categoryFilter === "all" || supplier.categories.includes(categoryFilter))
  );

  filtered.forEach(supplier => {
    const productsHTML = supplier.products.map(
      p => `<li>${p.name} – ${p.price}</li>`
    ).join("");

    const card = document.createElement("div");
    card.className = "col-md-6 col-lg-4 mb-4";
    card.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${supplier.image}" class="card-img-top" alt="${supplier.name}">
        <div class="card-body">
          <h5 class="card-title">${supplier.name}</h5>
          <ul class="list-unstyled small mb-3">${productsHTML}</ul>
          <div class="contact-buttons">
            <a class="btn btn-primary btn-sm" href="tel:${supplier.phone}">📞 Call</a>
            <a class="btn btn-success btn-sm" href="https://wa.me/${supplier.whatsapp}" target="_blank">💬 WhatsApp</a>
          </div>
        </div>
      </div>
    `;
    list.appendChild(card);
  });
}

document.getElementById("areaFilter").addEventListener("change", displaySuppliers);
document.getElementById("categoryFilter").addEventListener("change", displaySuppliers);
displaySuppliers();
