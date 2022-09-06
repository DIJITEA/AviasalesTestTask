import './assets/scss/MainScss/mainStyles.scss'
import './assets/scss/MainScss/styleReset.scss'
import Header from "./components/HeaderBlock/Header";
import Input from "./components/InputBlock/input";
import NumberOfTransfers from "./components/NumberOfTransfersBlock/NumberOfTransfers";
import CompaniesSwitcher from "./components/CompaniesSwitcherBlock/CompaniesSwitcher";
import Sort from "./components/SortBlock/Sort";
import Tikets from "./components/TicketsBlock/Tikets";

export default function App() {
  return <div className='content'>
    <div className='content-container'>
      <Header />
      <Input />
      <hr className='content-container__hr'/>
      <div className='content-container__lower-level'>
        <div>
          <NumberOfTransfers />
          <CompaniesSwitcher />
        </div>
        <div>
          <Sort />
          <Tikets />
        </div>
      </div>
    </div>
  </div>
}
