import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>AMHO</span> Marketplace
      </h1>
      <p className={headerStyles.description}>
        Buy and Sell luxury goods in the Blockchain
      </p>
    </div>
  )
}

export default Header