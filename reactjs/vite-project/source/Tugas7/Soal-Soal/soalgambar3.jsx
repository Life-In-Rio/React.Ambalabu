function AlertButton({ message, children }) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-[400px] mt-[50px]"
      onClick={() => alert(message)}
    >
      {children}
    </button>
  );
}

export default function TombolPengumuman() {
  return (
    <div>
      <AlertButton message="Pengumuman! Harap Tutup Tab ini.">
        Tombol 1
      </AlertButton>
      <AlertButton message="Tab ini ada Bug harap tutup tab ini segera!">
        Tombol 2
      </AlertButton>
    </div>
  );
}
