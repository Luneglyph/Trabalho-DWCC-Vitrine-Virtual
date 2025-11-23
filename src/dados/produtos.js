// lista de produtos placeholder

const produtos = [
  {
    id: 1,
    nome: "Notebook HP",
    preco: 3500.00,
    descricao: "Notebook bom para trabalho e estudo",
    fabricante: "HP",
    imagem: "https://br-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c07973357_4.png",
    especificacoes: [
      "Intel Core i5",
      "8GB RAM",
      "SSD 256GB",
      "Tela de 15.6 polegadas",
      "Windows 11"
    ]
  },
  {
    id: 2,
    nome: "Mouse Logitech wireless",
    preco: 450.00,
    descricao: "Mouse sem fio",
    fabricante: "Logitech",
    imagem: "https://images3.kabum.com.br/produtos/fotos/107333/mouse-gamer-sem-fio-logitech-g-pro-wireless-lightspeed-rgb-lightsync-ambidestro-6-botoes-programaveis-hero-25k-910-005271_1644501564_gg.jpg",
    especificacoes: [
      "Bluetooth",
      "7 botões",
      "Ergonômico"
    ]
  },
  {
    id: 3,
    nome: "Teclado Mecânico Redragon",
    preco: 300.00,
    descricao: "Teclado mecânico gamer",
    fabricante: "Redragon",
    imagem: "https://cdn.awsli.com.br/2500x2500/1318/1318167/produto/163588677/191874bc06.jpg",
    especificacoes: [
      "Switches mecânicos",
      "RGB",
      "ABNT2"
    ]
  },
  {
    id: 4,
    nome: "Playstation 5 Slim",
    preco: 3000.00,
    descricao: "Console de videogame versão Slim",
    fabricante: "Sony",
    imagem: "https://m.media-amazon.com/images/I/41bsdF9lMPL.jpg",
    especificacoes: [
        "SSD de 825GB",
        "Suporte a 4K",
        "Controle DualSense"
    ]
  },
  {
    id: 5,
    nome: "TV Samsung 50 polegadas",
    preco: 2000.00,
    descricao: "TV 4K UHD Smart",
    fabricante: "Samsung",
    imagem: "https://fastshopbr.vtexassets.com/arquivos/ids/1672138/0_SGUN50DU8000_PRD_1500_1.jpg?v=638751357213500000",
    especificacoes: [
        "Resolução 4K UHD",
        "Smart TV com Wi-Fi",
        "HDR",
        "3 HDMI e 2 USB"
    ]
  },
  {
    id: 6,
    nome: "Webcam Logitech",
    preco: 300.00,
    descricao: "Webcam Full HD",
    fabricante: "Logitech",
    imagem: "https://lojaibyte.vteximg.com.br/arquivos/ids/192149-1200-1200/webcam-logitech-c922-usb-pro-stream-full-hd-1080p-preto-960-001087-5.png?v=637286855069430000",
    especificacoes: [
      "Gravação 1080p",
      "Microfone embutido",
      "Foco automático"
    ]
  }
];

export default produtos;