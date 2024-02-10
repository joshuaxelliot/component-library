import Button from "./components/Button";
import Alert from "./components/Alert";
import { FaCheckCircle, FaInfoCircle, FaExclamationTriangle, FaBasketballBall, FaAngellist, FaChessKnight } from "react-icons/fa";
import Badge from "./components/Badge";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="mx-4">
      <Header />
      <div className="pt-8">
        <h2 className="text-2xl font-bold mb-4">Button Components</h2>
        <h3 className="text-lg font-semibold mb-2">Sizes</h3>
      </div>

      <div className="flex gap-2 items-end flex-wrap">
        <Button size="px-2 py-1" color="bg-blue-500 text-white">
          Small
        </Button>

        <Button size="px-4 py-2" color="bg-blue-500 text-white">
          Medium
        </Button>

        <Button size="px-6 py-3" color="bg-blue-500 text-white">
          Large
        </Button>
      </div>

      <br />

      <div>
        <h3 className="text-lg font-semibold mb-2">Colors</h3>
      </div>

      <div className="flex gap-2 items-end flex-wrap">
        <Button size="px-6 py-3" color="bg-red-500 text-white">
          Red
        </Button>

        <Button size="px-6 py-3" color="bg-yellow-500 text-white">
          Yellow
        </Button>

        <Button size="px-6 py-3" color="bg-green-500 text-white">
          Green
        </Button>
      </div>
      
      <br />

      <div>
        <h3 className="text-lg font-semibold mb-2">Non-Disabled/Disabled</h3>
      </div>

      <div className="flex gap-2 items-end flex-wrap">
        <Button size="px-8 py-4" color="bg-gray-500 text-white " disabled={false}>
          No
        </Button>

        <Button size="px-8 py-4" color="bg-gray-500 text-white" disabled={true}>
          Yes
        </Button>
      </div>

      <br />

      <h2 className="text-2xl font-bold mb-4">Alert Components</h2>
      <div className="flex-col items-center flex-wrap">
        <Alert color="green" icon={FaCheckCircle}>
          Success alert
        </Alert>
        <br />
        <Alert color="red" icon={FaInfoCircle}>
          Error alert
        </Alert>
        <br />
        <Alert color="yellow" icon={FaExclamationTriangle}>
          Warning alert
        </Alert>
      </div>

      <br />
 
      <h2 className="text-2xl font-bold mb-4">Badge Components</h2>
      <div className="flex gap-2 ">
        <Badge color="green" size="text-sm" icon={FaBasketballBall}>
          Small Badge
        </Badge>

        <Badge color="green" size="text-md" icon={FaAngellist}>
          Medium Badge
        </Badge>

        <Badge color="green" size="text-lg" icon={FaChessKnight}>
          Large Badge
        </Badge>
      </div>

      <br />

      <h2 className="text-2xl font-bold mb-4">Card Components</h2>
      <div className="flex justify-around">
        <Card href="https://sv.wikipedia.org/wiki/Cristo_Redentor" imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Christ_the_Redeemer_-_Cristo_Redentor.jpg/400px-Christ_the_Redeemer_-_Cristo_Redentor.jpg" imgAlt="Placeholder image">
          <h3 className="text-xl font-bold mb-2">Cristo Redentor</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolor optio doloremque, numquam alias placeat maiores dolore accusantium !
          </p>
        </Card>
        <Card href="https://sv.wikipedia.org/wiki/Cristo_Redentor" imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Christ_the_Redeemer_-_Cristo_Redentor.jpg/400px-Christ_the_Redeemer_-_Cristo_Redentor.jpg" imgAlt="Placeholder image">
          <h3 className="text-xl font-bold mb-2">Cristo Redentor</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolor optio doloremque, numquam alias placeat maiores dolore accusantium !
          </p>
        </Card>
        <Card href="https://sv.wikipedia.org/wiki/Cristo_Redentor" imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Christ_the_Redeemer_-_Cristo_Redentor.jpg/400px-Christ_the_Redeemer_-_Cristo_Redentor.jpg" imgAlt="Placeholder image">
          <h3 className="text-xl font-bold mb-2">Cristo Redentor</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolor optio doloremque, numquam alias placeat maiores dolore accusantium !
          </p>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default App;
