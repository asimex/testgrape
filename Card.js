const Card = () => (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '20px',
      maxWidth: '400px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#fff',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <img
        src="https://via.placeholder.com/400x200"
        alt="Card Image"
        style={{ width: '100%', borderRadius: '6px', marginBottom: '15px' }}
      />
      <h3 style={{ margin: '0 0 10px', fontSize: '20px', color: '#333' }}>
        Beautiful React Card
      </h3>
      <p style={{ fontSize: '14px', color: '#555' }}>
        This card was pulled directly from GitHub and rendered live inside GrapesJS. It's styled with inline styles and designed to be easily editable.
      </p>
      <button style={{
        marginTop: '15px',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        Learn More
      </button>
    </div>
  );
  