import "./HealtProducts.css";
import Card from "../../components/Card/Card";
import ProductFilters from "../../components/ProductFilters/ProductFilters";
import img from "../../assets/y.jpg";

const products = [
  {
    id: 1,
    name: "Paracetamol",
    image: img,
    description: "Pain reliever and fever reducer",
    price: "50",
  },
  {
    id: 2,
    name: "Ibuprofen",
    image: img,
    description: "Non-steroidal anti-inflammatory drug (NSAID)",
    price: "75",
  },
  {
    id: 3,
    name: "Amoxicillin",
    image: img,
    description: "Broad-spectrum antibiotic",
    price: "120",
  },
  {
    id: 4,
    name: "Cetirizine",
    image: img,
    description: "Antihistamine for allergies",
    price: "40",
  },
  {
    id: 5,
    name: "Metformin",
    image: img,
    description: "Used to control blood sugar levels in diabetes",
    price: "90",
  },
  {
    id: 6,
    name: "Omeprazole",
    image: img,
    description: "Used to treat acid reflux and ulcers",
    price: "110",
  },
  {
    id: 7,
    name: "Aspirin",
    image: img,
    description: "Pain reliever and anti-inflammatory",
    price: "30",
  },
  {
    id: 8,
    name: "Losartan",
    image: img,
    description: "Used to treat high blood pressure",
    price: "140",
  },
  {
    id: 9,
    name: "Atorvastatin",
    image: img,
    description: "Lowers cholesterol and triglycerides",
    price: "160",
  },
  {
    id: 10,
    name: "Azithromycin",
    image: img,
    description: "Antibiotic for bacterial infections",
    price: "180",
  },
  {
    id: 11,
    name: "Atorvastatin",
    image: img,
    description: "Lowers cholesterol and triglycerides",
    price: "160",
  },
  {
    id: 12,
    name: "Azithromycin",
    image: img,
    description: "Antibiotic for bacterial infections",
    price: "180",
  },
  {
    id: 13,
    name: "Atorvastatin",
    image: img,
    description: "Lowers cholesterol and triglycerides",
    price: "160",
  },
  {
    id: 14,
    name: "Azithromycin",
    image: img,
    description: "Antibiotic for bacterial infections",
    price: "180",
  },
  {
    id: 15,
    name: "Atorvastatin",
    image: img,
    description: "Lowers cholesterol and triglycerides",
    price: "160",
  },
  {
    id: 16,
    name: "Azithromycin",
    image: img,
    description: "Antibiotic for bacterial infections",
    price: "180",
  },
  {
    id: 17,
    name: "Atorvastatin",
    image: img,
    description: "Lowers cholesterol and triglycerides",
    price: "160",
  },
  {
    id: 18,
    name: "Azithromycin",
    image: img,
    description: "Antibiotic for bacterial infections",
    price: "180",
  },
  {
    id: 19,
    name: "Atorvastatin",
    image: img,
    description: "Lowers cholesterol and triglycerides",
    price: "160",
  },
  {
    id: 20,
    name: "Azithromycin",
    image: img,
    description: "Antibiotic for bacterial infections",
    price: "180",
  },
];

export default function HealtProducts() {
  return (
    <>
      <main>
        <div className="productsPage">
          <div className="productsFilter">
          <ProductFilters/>
          </div>
          <div className="productsContainer">
            {products.map((product) => (
              <Card
                key={product.id}
                name={product.name}
                image={product.image}
                description={product.description}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
