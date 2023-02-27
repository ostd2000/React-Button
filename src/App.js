import "./App.scss";

import AddIcon from "@mui/icons-material/Add";

import BtnC from "./BtnC";

function App() {
    return (
        <div className="app">
            <div className="app__c1">
                <BtnC primary filled>
                    ورود
                </BtnC>

                <BtnC secondary outlined large>
                    ورود
                </BtnC>

                <BtnC primary dashed large>
                    ورود
                </BtnC>

                <BtnC danger filled icon={<AddIcon />}>
                    ورود
                </BtnC>
            </div>
        </div>
    );
}

export default App;
