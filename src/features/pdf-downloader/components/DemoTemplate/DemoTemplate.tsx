import "./demoTemplate.css";

const DemoTemplate = () => {
  return (
    <div className="invoice">
      {/* Watermark */}
      <img
        src="https://img.icons8.com/plasticine/100/invoice.png"
        // src="https://ik.imagekit.io/ianttac2k/tr:w-100/qanun-email-template/logo.svg"
        className="watermark"
        alt="Watermark"
      />

      <header>
        {/* Logo */}
        <img
          src="https://img.icons8.com/plasticine/100/invoice.png"
          // src="https://ik.imagekit.io/ianttac2k/tr:w-100/qanun-email-template/logo.svg"
          className="logo"
          alt="Invoice Logo"
        />
        <h1>INVOICE</h1>
        <div className="company-details">
          <h2>Your Company</h2>
          <p>123 Street, City</p>
          <p>Email: info@company.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </header>

      <section className="details">
        <div className="client">
          <h3>Bill To:</h3>
          <p>Client Name</p>
          <p>456 Another Street</p>
          <p>City, Country</p>
          <p>Email: client@email.com</p>
        </div>
        <div className="invoice-info">
          <h3>Invoice Details:</h3>
          <p>
            <strong>Invoice #:</strong> 001
          </p>
          <p>
            <strong>Date:</strong> Sept 18, 2025
          </p>
          <p>
            <strong>Due Date:</strong> Sept 25, 2025
          </p>
        </div>
      </section>

      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Qty</th>
            <th>Unit Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Web Design Services</td>
            <td>10</td>
            <td>$50</td>
            <td>$500</td>
          </tr>
          <tr>
            <td>Hosting (1 year)</td>
            <td>1</td>
            <td>$100</td>
            <td>$100</td>
          </tr>
        </tbody>
      </table>

      <div className="totals">
        <table>
          <tbody>
            <tr>
              <td>Subtotal:</td>
              <td>$600</td>
            </tr>
            <tr>
              <td>Tax (10%):</td>
              <td>$60</td>
            </tr>
            <tr>
              <th>Grand Total:</th>
              <th>$660</th>
            </tr>
          </tbody>
        </table>
      </div>

      <footer>
        <p>Thank you for your business!</p>
      </footer>
    </div>
  );
};

export default DemoTemplate;
