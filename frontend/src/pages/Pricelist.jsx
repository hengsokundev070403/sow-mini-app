import { useState, useEffect } from 'react';
import { getProducts } from '../api/product';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATION_KEYS } from '../constants/translationKeys';
import ProductRow from '../components/ProductRow';
import '../styles/pricelist.css';
import Loader from './Loader';

export default function PriceList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { translation } = useLanguage();
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedProduct = await getProducts();

        setProducts(fetchedProduct);
      } catch (error) {
        setError('Failed to load products. Please check your connection.');
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProduct();
  }, []);
  if (isLoading || translation == null) {
    return <Loader />;
  }
  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>
        {error}
      </div>
    );
  }
  return (
    <div className="pricelist-container">
      <div className="pricelist-toolbar">
        <div className="toolbar-search-group">
          <div className="search-input-wrapper">
            <input
              type="text"
              placeholder={
                translation[
                  TRANSLATION_KEYS.PRICELIST.PLACEHOLDER_SEARCH_ARTICLE
                ]
              }
            />
            <span className="search-icon">
              <svg
                fill="#9ef0f5"
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
              >
                <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
              </svg>
            </span>
          </div>
          <div className="search-input-wrapper">
            <input
              type="text"
              placeholder={
                translation[
                  TRANSLATION_KEYS.PRICELIST.PLACEHOLDER_SEARCH_PRODUCT
                ]
              }
            />
            <span className="search-icon">
              <svg
                fill="#9ef0f5"
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
              >
                <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
              </svg>
            </span>
          </div>
        </div>
        <div className="toolbar-action-group">
          <button className="action-btn btn-new">
            <span className="btn-text mobile-mode-hide tablet-mode-hide">
              {translation[TRANSLATION_KEYS.PRICELIST.BTN_NEW_PRODUCT]}
            </span>
            <span className="btn-icon">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 48 48"
                enableBackground="new 0 0 48 48"
              >
                <circle fill="#2ebb87" cx="24" cy="24" r="21" />
                <g fill="#ffffff">
                  <rect x="21" y="14" width="6" height="20" />
                  <rect x="14" y="21" width="20" height="6" />
                </g>
              </svg>
            </span>
          </button>
          <button className="action-btn btn-print">
            <span className="btn-text mobile-mode-hide tablet-mode-hide">
              {translation[TRANSLATION_KEYS.PRICELIST.BTN_PRINT_LIST]}
            </span>
            <span className="btn-icon">
              <svg viewBox="0 0 15 15" width="20px" height="20px">
                <path
                  d="M4.5 6.5V3.5C4.5 2.9477 4.9477 2.5 5.5 2.5H9.5C10.0523 2.5 10.5 2.9477 10.5 3.5V6.5Z"
                  fill="#ffffff"
                  stroke="#34e2fb"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.5 7.5V11.5C14.5 12.0523 14.0523 12.5 13.5 12.5H1.5C0.9477 12.5 0.5 12.0523 0.5 11.5V7.5C0.5 6.9477 0.9477 6.5 1.5 6.5H13.5C14.0523 6.5 14.5 6.9477 14.5 7.5Z"
                  fill="#34e2fb"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.5 9.5H11.5V14.5H3.5V9.5Z"
                  fill="#ffffff"
                  stroke="#34e2fb"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
          <button className="action-btn">
            <span className="btn-text mobile-mode-hide tablet-mode-hide">
              {translation[TRANSLATION_KEYS.PRICELIST.BTN_ADVANCED_MODE]}
            </span>
            <span className="btn-icon">
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                <rect
                  x="2"
                  y="7"
                  width="20"
                  height="10"
                  rx="5"
                  fill="#58d4eb"
                  stroke="#58d4eb"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="17"
                  cy="12"
                  r="6"
                  stroke="white"
                  fill="#58d4eb"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="pricelist-table-container">
        {products.length === 0 ? (
          //only used in here that's why i do inline styling
          <div style={{ textAlign: 'center', padding: '50px', color: 'gray' }}>
            <h3>No products found.</h3>
          </div>
        ) : (
          <table className="pricelist-table">
            <colgroup>
              <col className="col1" />
              <col className="col2" />
              <col className="col3" />
              <col className="col4" />
              <col className="col5" />
              <col className="col6" />
              <col className="col7" />
              <col className="col8" />
              <col className="col9" />
            </colgroup>
            <thead>
              <tr>
                <th className="col-indicator"></th>
                <th className="col-article mobile-mode-hide tablet-mode-hide portrait-mode-hide">
                  {translation[TRANSLATION_KEYS.PRICELIST.TH_ARTICLE_NO]}
                </th>
                <th className="col-product">
                  {translation[TRANSLATION_KEYS.PRICELIST.TH_PRODUCT_SERVICE]}
                </th>
                <th className="col-inprice mobile-mode-hide tablet-mode-hide">
                  {translation[TRANSLATION_KEYS.PRICELIST.TH_IN_PRICE]}
                </th>
                <th className="col-price">
                  {translation[TRANSLATION_KEYS.PRICELIST.TH_PRICE]}
                </th>
                <th className="col-stock mobile-mode-hide tablet-mode-hide portrait-mode-hide">
                  {translation[TRANSLATION_KEYS.PRICELIST.TH_IN_STOCK]}
                </th>
                <th className="col-unit mobile-mode-hide tablet-mode-hide portrait-mode-hide">
                  {translation[TRANSLATION_KEYS.PRICELIST.TH_UNIT]}
                </th>
                <th className="col-desc mobile-mode-hide tablet-mode-hide">
                  {translation[TRANSLATION_KEYS.PRICELIST.TH_DESCRIPTION]}
                </th>
                <th className="col-menu"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((prod) => (
                <ProductRow key={prod.id} product={prod} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
