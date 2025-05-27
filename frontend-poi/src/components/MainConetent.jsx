export default function MainContent() {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('../que_pato.jpg')" }}
    >
      {/* Aquí va el contenido que quieras superponer */}
      <div className="flex items-center justify-center h-full text-white bg-black/50">
        <h1 className="text-4xl font-bold">POI Financiero</h1>
      </div>
    </div>
  );
}
