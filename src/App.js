import "./App.scss";

import AddIcon from "@mui/icons-material/Add";

import BtnC from "./BtnC";

function App() {
    return (
        <div className="app">
            <BtnC disabled icon={<AddIcon />}>
                Add to cart
            </BtnC>
        </div>
    );
}

export default App;
