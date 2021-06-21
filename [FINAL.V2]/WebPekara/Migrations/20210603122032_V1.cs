using Microsoft.EntityFrameworkCore.Migrations;

namespace WebPekara.Migrations
{
    public partial class V1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Kasica",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Novac = table.Column<int>(type: "int", nullable: false),
                    Racun = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Kasica", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Radnja",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Radnja", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Stanje",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    KasaID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Stanje", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Stanje_Kasica_KasaID",
                        column: x => x.KasaID,
                        principalTable: "Kasica",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Radnik",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ime = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    Prezime = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    Jmbg = table.Column<int>(type: "int", nullable: false),
                    Pozicija = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    RadnjaID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Radnik", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Radnik_Radnja_RadnjaID",
                        column: x => x.RadnjaID,
                        principalTable: "Radnja",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Peciva",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naziv = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Gramaza = table.Column<int>(type: "int", maxLength: 255, nullable: false),
                    Cena = table.Column<int>(type: "int", nullable: false),
                    Kolicina = table.Column<int>(type: "int", nullable: false),
                    StanjeID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Peciva", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Peciva_Stanje_StanjeID",
                        column: x => x.StanjeID,
                        principalTable: "Stanje",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Peciva_StanjeID",
                table: "Peciva",
                column: "StanjeID");

            migrationBuilder.CreateIndex(
                name: "IX_Radnik_RadnjaID",
                table: "Radnik",
                column: "RadnjaID");

            migrationBuilder.CreateIndex(
                name: "IX_Stanje_KasaID",
                table: "Stanje",
                column: "KasaID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Peciva");

            migrationBuilder.DropTable(
                name: "Radnik");

            migrationBuilder.DropTable(
                name: "Stanje");

            migrationBuilder.DropTable(
                name: "Radnja");

            migrationBuilder.DropTable(
                name: "Kasica");
        }
    }
}
