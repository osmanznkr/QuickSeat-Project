import React from 'react';

function FooterComponent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent:'end' }}>
      <div style={{ flex: 1 }}>
        {/* Sayfa içeriği buraya gelecek */}
      </div>
      <footer style={{ backgroundColor: '#f8f9fa', padding: '20px', marginTop: '20px', textAlign: 'center' }}>
        <p>&copy; 2023 Quick Seat - Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export default FooterComponent;
