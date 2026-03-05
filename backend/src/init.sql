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
    lg_code VARCHAR(2) NOT NULL,
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
VALUES ('admin', '$2a$12$7USy10nDucyed6k5Mjo3LedxL5VaJfyhj5TNGOG5frLI.TEXdmX3e');

INSERT INTO translations (lg_code, text_key, value) VALUES 
-- registration
('EN', 'register_title', 'Register'),
('SE', 'register_title', 'Registrera'),
('EN', 'business_name_placeholder', 'Business name'),
('SE', 'business_name_placeholder', 'Företagsnamn'),
('EN', 'contact_person_placeholder', 'Contact Person'),
('SE', 'contact_person_placeholder', 'Kontaktperson'),
('EN', 'address_placeholder', 'Address'),
('SE', 'address_placeholder', 'Adress'),
('EN', 'postal_number_placeholder', 'Postal number'),
('SE', 'postal_number_placeholder', 'Postnummer'),
('EN', 'city_placeholder', 'City'),
('SE', 'city_placeholder', 'Ort'),
('EN', 'email_address_placeholder', 'Email address'),
('SE', 'email_address_placeholder', 'E-postadress'),
('EN', 'phone_number_placeholder', 'Phone number'),
('SE', 'phone_number_placeholder', 'Telefonnummer'),
('EN', 'choose_password_placeholder', 'Choose Password'),
('SE', 'choose_password_placeholder', 'Välj lösenord'),
('EN', 'invoice_now_btn', 'Invoice Now'),
('SE', 'invoice_now_btn', 'Fakturera nu'),

('EN', 'reg_info_trial', 'You can use and try 123 Fakturera for free for 14 days.'),
('SE', 'reg_info_trial', 'Du kan använda och prova 123 Fakturera gratis i 14 dagar.'),
('EN', 'reg_info_full_version', 'This is a true full-version, so you can send out 1000 invoices or more, for free.'),
('SE', 'reg_info_full_version', 'Detta är en riktig fullversion, så du kan skicka ut 1000 fakturor eller mer, helt gratis.'),
('EN', 'reg_info_subscription', '123 Fakturera is so easy and self-explanatory that the chance that you will need help is minimal, but if you should need support, we are here for you, with our office manned for most part of the day. After the trial period, the subscription continues and costs 99 SEK excluding VAT per month, which is billed annually. If you do not want to keep the program, just cancel the trial period by giving notice before 14 days from today.'),
('SE', 'reg_info_subscription', '123 Fakturera är så enkelt och självförklarande att chansen att du behöver hjälp är minimal, men om du skulle behöva support finns vi här för dig, med ett bemannat kontor under största delen av dagen. Efter provperioden fortsätter prenumerationen och kostar 99 SEK exklusive moms per månad, vilket faktureras årligen. Om du inte vill behålla programmet avbryter du bara provperioden genom att meddela oss senast 14 dagar från idag.'),
('EN', 'reg_info_terms_accept', 'Click Invoice Now to start invoicing and to accept the terms, and your first invoice is normally ready to be sent in 5 - 10 minutes.'),
('SE', 'reg_info_terms_accept', 'Klicka på Fakturera nu för att börja fakturera och godkänna villkoren. Din första faktura är normalt redo att skickas inom 5 - 10 minuter.'),
('EN', 'terms_link', 'terms'),
('SE', 'terms_link', 'villkor'),

-- sidebar
('EN', 'menu_title', 'Menu'),
('SE', 'menu_title', 'Meny'),
('EN', 'menu_invoices', 'Invoices'),
('SE', 'menu_invoices', 'Fakturor'),
('EN', 'menu_customers', 'Customers'),
('SE', 'menu_customers', 'Kunder'),
('EN', 'menu_my_business', 'My Business'),
('SE', 'menu_my_business', 'Mitt företag'),
('EN', 'menu_invoice_journal', 'Invoice Journal'),
('SE', 'menu_invoice_journal', 'Fakturajournal'),
('EN', 'menu_price_list', 'Price List'),
('SE', 'menu_price_list', 'Prislista'),
('EN', 'menu_multiple_invoicing', 'Multiple Invoicing'),
('SE', 'menu_multiple_invoicing', 'Massfakturering'),
('EN', 'menu_unpaid_invoices', 'Unpaid Invoices'),
('SE', 'menu_unpaid_invoices', 'Obetalda fakturor'),
('EN', 'menu_offer', 'Offer'),
('SE', 'menu_offer', 'Offert'),
('EN', 'menu_inventory_control', 'Inventory Control'),
('SE', 'menu_inventory_control', 'Lagerhantering'),
('EN', 'menu_member_invoicing', 'Member Invoicing'),
('SE', 'menu_member_invoicing', 'Medlemsfakturering'),
('EN', 'menu_import_export', 'Import/Export'),
('SE', 'menu_import_export', 'Import/Export'),
('EN', 'menu_log_out', 'Log out'),
('SE', 'menu_log_out', 'Logga ut'),

-- price list page
('EN', 'search_article_no_placeholder', 'Search Article No...'),
('SE', 'search_article_no_placeholder', 'Sök artikelnummer...'),
('EN', 'search_product_placeholder', 'Search Product...'),
('SE', 'search_product_placeholder', 'Sök produkt...'),
('EN', 'btn_new_product', 'New Product'),
('SE', 'btn_new_product', 'Ny produkt'),
('EN', 'btn_print_list', 'Print List'),
('SE', 'btn_print_list', 'Skriv ut lista'),
('EN', 'btn_advanced_mode', 'Advanced mode'),
('SE', 'btn_advanced_mode', 'Avancerat läge'),
('EN', 'th_article_no', 'Article No.'),
('SE', 'th_article_no', 'Artikelnr.'),
('EN', 'th_product_service', 'Product/Service'),
('SE', 'th_product_service', 'Produkt/Tjänst'),
('EN', 'th_in_price', 'In Price'),
('SE', 'th_in_price', 'Inpris'),
('EN', 'th_price', 'Price'),
('SE', 'th_price', 'Pris'),
('EN', 'th_unit', 'Unit'),
('SE', 'th_unit', 'Enhet'),
('EN', 'th_in_stock', 'In Stock'),
('SE', 'th_in_stock', 'I lager'),
('EN', 'th_description', 'Description'),
('SE', 'th_description', 'Beskrivning');

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