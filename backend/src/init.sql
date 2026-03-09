DROP TABLE IF EXISTS translations;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS users;
-- users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- translations table
CREATE TABLE translations (
    id SERIAL PRIMARY KEY,
    lg_code VARCHAR(15) NOT NULL, 
    text_key VARCHAR(50) NOT NULL,
    value TEXT NOT NULL,
    UNIQUE(lg_code, text_key)
);

-- products table
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    article_no VARCHAR(50) UNIQUE,
    product_name VARCHAR(255) NOT NULL,
    in_price DECIMAL(10,2),
    price DECIMAL(10,2),
    unit VARCHAR(50),
    in_stock INTEGER CHECK (in_stock >= 0),
    description TEXT
);

INSERT INTO users (username, password) 
VALUES ('admin@gmail.com', '$2a$12$7USy10nDucyed6k5Mjo3LedxL5VaJfyhj5TNGOG5frLI.TEXdmX3e');

INSERT INTO translations (lg_code, text_key, value) VALUES 
('en-GB', 'error_empty_field', 'This field cannot be empty'),
('sv-SE', 'error_empty_field', 'Detta fält kan inte vara tomt'),
('en-GB', 'error_missing_email', 'Please enter your email'),
('sv-SE', 'error_missing_email', 'Vänligen ange din e-postadress'),
-- navbar
('en-GB', 'nav_home', 'Home'),
('sv-SE', 'nav_home', 'Hem'),
('en-GB', 'nav_order', 'Order'),
('sv-SE', 'nav_order', 'Beställ'),
('en-GB', 'nav_our_customers', 'Our Customers'),
('sv-SE', 'nav_our_customers', 'Våra Kunder'),
('en-GB', 'nav_about_us', 'About us'),
('sv-SE', 'nav_about_us', 'Om oss'),
('en-GB', 'nav_contact_us', 'Contact us'),
('sv-SE', 'nav_contact_us', 'Kontakta oss'),
('en-GB', 'nav_language_toggle', 'English'),
('sv-SE', 'nav_language_toggle', 'Svenska'),
-- login
('en-GB', 'login_title', 'Login'),
('sv-SE', 'login_title', 'Logga in'),
('en-GB', 'login_email_label', 'Enter your email address'),
('sv-SE', 'login_email_label', 'Skriv in din epost adress'),
('en-GB', 'login_email_placeholder', 'Email address'),
('sv-SE', 'login_email_placeholder', 'Epost adress'),
('en-GB', 'login_email_error', 'Please enter a valid email address'),
('sv-SE', 'login_email_error', 'Vänligen skriv in en giltig epost adress'),
('en-GB', 'login_password_label', 'Enter your password'),
('sv-SE', 'login_password_label', 'Skriv in ditt lösenord'),
('en-GB', 'login_password_placeholder', 'Password'),
('sv-SE', 'login_password_placeholder', 'Lösenord'),
('en-GB', 'login_submit_btn', 'Login'),
('sv-SE', 'login_submit_btn', 'Logga in'),
('en-GB', 'login_register_link', 'Register'),
('sv-SE', 'login_register_link', 'Registrera dig'),
('en-GB', 'login_forgot_password_link', 'Forgot password?'),
('sv-SE', 'login_forgot_password_link', 'Glömt lösenord?'),

-- sidebar
('en-GB', 'menu_title', 'Menu'),
('sv-SE', 'menu_title', 'Meny'),
('en-GB', 'menu_invoices', 'Invoices'),
('sv-SE', 'menu_invoices', 'Fakturor'),
('en-GB', 'menu_customers', 'Customers'),
('sv-SE', 'menu_customers', 'Kunder'),
('en-GB', 'menu_my_business', 'My Business'),
('sv-SE', 'menu_my_business', 'Mitt företag'),
('en-GB', 'menu_invoice_journal', 'Invoice Journal'),
('sv-SE', 'menu_invoice_journal', 'Fakturajournal'),
('en-GB', 'menu_price_list', 'Price List'),
('sv-SE', 'menu_price_list', 'Prislista'),
('en-GB', 'menu_multiple_invoicing', 'Multiple Invoicing'),
('sv-SE', 'menu_multiple_invoicing', 'Massfakturering'),
('en-GB', 'menu_unpaid_invoices', 'Unpaid Invoices'),
('sv-SE', 'menu_unpaid_invoices', 'Obetalda fakturor'),
('en-GB', 'menu_offer', 'Offer'),
('sv-SE', 'menu_offer', 'Offert'),
('en-GB', 'menu_inventory_control', 'Inventory Control'),
('sv-SE', 'menu_inventory_control', 'Lagerhantering'),
('en-GB', 'menu_member_invoicing', 'Member Invoicing'),
('sv-SE', 'menu_member_invoicing', 'Medlemsfakturering'),
('en-GB', 'menu_import_export', 'Import/Export'),
('sv-SE', 'menu_import_export', 'Import/Export'),
('en-GB', 'menu_log_out', 'Log out'),
('sv-SE', 'menu_log_out', 'Logga ut'),

-- price list page
('en-GB', 'search_article_no_placeholder', 'Search Article No...'),
('sv-SE', 'search_article_no_placeholder', 'Sök artikelnummer...'),
('en-GB', 'search_product_placeholder', 'Search Product...'),
('sv-SE', 'search_product_placeholder', 'Sök produkt...'),
('en-GB', 'btn_new_product', 'New Product'),
('sv-SE', 'btn_new_product', 'Ny produkt'),
('en-GB', 'btn_print_list', 'Print List'),
('sv-SE', 'btn_print_list', 'Skriv ut lista'),
('en-GB', 'btn_advanced_mode', 'Advanced mode'),
('sv-SE', 'btn_advanced_mode', 'Avancerat läge'),
('en-GB', 'th_article_no', 'Article No.'),
('sv-SE', 'th_article_no', 'Artikelnr.'),
('en-GB', 'th_product_service', 'Product/Service'),
('sv-SE', 'th_product_service', 'Produkt/Tjänst'),
('en-GB', 'th_in_price', 'In Price'),
('sv-SE', 'th_in_price', 'Inpris'),
('en-GB', 'th_price', 'Price'),
('sv-SE', 'th_price', 'Pris'),
('en-GB', 'th_unit', 'Unit'),
('sv-SE', 'th_unit', 'Enhet'),
('en-GB', 'th_in_stock', 'In Stock'),
('sv-SE', 'th_in_stock', 'I lager'),
('en-GB', 'th_description', 'Description'),
('sv-SE', 'th_description', 'Beskrivning');

--dummy data
INSERT INTO products (article_no, product_name, in_price, price, unit, in_stock, description)
VALUES 
('1234567890', 'Test Product 1', 900500, 1500800, 'kilometers/hour', 2500600, 'this is description'),
('1234567891', 'Test Product 2', 915000, 1550000, 'kilometers/hour', 2450000, 'this is description'),
('1234567892', 'Test Product 3', 890000, 1490000, 'kilometers/hour', 2600000, 'this is description'),
('1234567893', 'Test Product 4', 950000, 1600000, 'kilometers/hour', 1500000, 'this is description'),
('1234567894', 'Test Product 5', 45000, 85000, 'pieces', 5000000, 'this is description'),
('1234567895', 'Test Product 6', 12000, 25000, 'pieces', 8500000, 'this is description'),
('1234567896', 'Test Product 7', 5436, 500000, 'hours', 9999999, 'this is description'),
('1234567897', 'Test Product 8', 2333, 950000, 'hours', 9999999, 'this is description'),
('1234567898', 'Test Product 9', 920000, 1520000, 'kilometers/hour', 2100000, 'this is description'),
('1234567899', 'Test Product 10', 900500, 1500800, 'kilometers/hour', 50000, 'this is description'),
('1234567810', 'Test Product 11', 150000, 300000, 'pieces', 150000, 'this is description'),
('1234567811', 'Test Product 12', 25000, 60000, 'meters', 400000, 'this is description'),
('1234567812', 'Test Product 13', 350000, 650000, 'pieces', 80000, 'this is description'),
('1234567813', 'Test Product 14', 930000, 1580000, 'kilometers/hour', 1800000, 'this is description'),
('1234567814', 'Test Product 15', 940000, 1590000, 'kilometers/hour', 1200000, 'this is description'),
('1234567815', 'Test Product 16', 8000, 18000, 'liters', 6000000, 'this is description'),
('1234567816', 'Test Product 17', 5000, 12000, 'liters', 8000000, 'this is description'),
('1234567817', 'Test Product 18', 905000, 1510000, 'kilometers/hour', 2300000, 'this is description'),
('1234567818', 'Test Product 19', 900500, 1500800, 'kilometers/hour', 2500600, 'this is description'),
('1234567819', 'Test Product 20', 234, 750000, 'years', 9999999, 'this is description');