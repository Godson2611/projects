import Image from "next/image";
import digitalIcon from "../../public/assets/icons/digital_bank.png";
import portfolioIcon from "../../public/assets/icons/portfolio.png";
import financingIcon from "../../public/assets/icons/financing.png";
import e_commerceIcon from "../../public/assets/icons/e_commerce.png";
import cryptoIcon from "../../public/assets/icons/crypto.png";
import insurIcon from "../../public/assets/icons/insur.png";
import stockIcon from "../../public/assets/icons/stock.png";
import paymentIcon from "../../public/assets/icons/payment.png";
import integrationsIcon from "../../public/assets/icons/integrations.png";
import dataIcon from "../../public/assets/icons/data_analytics.png";

export default function HowWeDoFintech() {
  return (
    <div className="bg__gray my-5 py-5">
      <div className="container-fluid padding py-5">
        <div className="row g-3 text-center text-md-start">
          <h2 className="text__red">How we Do</h2>
          <h5 className="text__text2 fw-medium">
            Structured process with transparency
          </h5>
        </div>
        <div className="row  d-flex align-items-center text-center text-md-start ">
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={digitalIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Digital Banking</h4>
            <small className="text__text1 mt-3">
              Neo banks, digital asset management platforms, digital KYC and
              onboarding solutions, integrations with banking APIs
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={portfolioIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Portfolio Management</h4>
            <small className="text__text1 mt-3">
              valuation and risk tools, aggregate or decompose portfolio data by
              any number of customized dimensions.
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={financingIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Financing Platforms</h4>
            <small className="text__text1 mt-3">
              valuation and risk tools, aggregate or decompose portfolio data by
              any number of customized dimensions.
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={e_commerceIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">E-commerce</h4>
            <small className="text__text1 mt-3">
              BNPL (Buy Now, Pay Later) and EPP (Equal Payment Plan), merchant
              portals, and e-commerce payment systems.
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={cryptoIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Crypto</h4>
            <small className="text__text1 mt-3">
              Binance Smart Chain, crypto exchange platforms, NFT marketplaces,
              DeFi and CBDC solutions, e-voting systems, crypto wallets, and
              extensions.
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={insurIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">InsurTech</h4>
            <small className="text__text1 mt-3">
              Blockchain development, fraud prevention/detection, marketplaces.
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={stockIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Stock Trading Platforms</h4>
            <small className="text__text1 mt-3">
              Data collection, data analytics, data warehousing, data marts,
              trading bots.
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={paymentIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Payment Processing Solutions</h4>
            <small className="text__text1 mt-3">
              Integration with TSYS, PayPal, Stripe, Square, Adyen, and more.
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={integrationsIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Integrations and Analytics</h4>
            <small className="text__text1 mt-3">
              Card schemes, messaging systems, loyalty systems, eWallets,
              accounting systems, payment gateways, e-commerce platforms,
              MNOs/Telco, campaigning, and marketing tools.
            </small>
          </div>
          <div className="col-12 col-md-6 mt-4 col-lg-3">
            <Image src={dataIcon} alt="web-logo" width={70} />
            <h4 className="text__text1 mt-3">Data Analytics & Management</h4>
            <small className="text__text1 mt-3">
              Customer insights, fraud detection, risk management, financial
              reporting, data warehousing, machine learning (ML), and business
              intelligence (BI).
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
