listar();
listar_all();

function listar() {
  fetch("controllers/ListarUsuariosController.php")
    .then((res) => res.json())
    .then((data) => {
      let str = "";
      if (data.length > 0) {
        data.map((item) => {
          str += `<tr>
                            <td>${item.Id_encuesta}</td>
                            <td>${item.P1}</td>
                            <td>${item.P2}</td>
                            <td>${item.P4}</td>
                            <td>${item.P5}</td>
                            <td>${item.Ptelf}</td>
                            <td>${item.P6}</td>
                            <td>${item.P6d}</td>                     
                            <td class="text-center">
                                <button class="btn btn-sm btn-primary" onclick="mostrar_usuario(${item.id})">Editar</button>
                                </td><td class="text-center">
                                <button class="btn btn-sm btn-danger" onclick="eliminar_usuario(${item.id})">Eliminar</button>
                            </td>
                        </tr>`;
        });
      } else {
        str = `<tr><td colspan="9" class="text-center">¡No hay cuestionarios!</td></tr>`;
      }

      document.getElementById("table_data").innerHTML = str;
    });
}

function listar_all() {
  fetch("controllers/ListarUsuariosController copy.php")
    .then((res) => res.json())
    .then((data) => {
      let str = "";
      if (data.length > 0) {
        data.map((item) => {
          str += `<tr>
                            <td>${item.Id_encuesta}</td>
                            <td>${item.P1}</td>
                            <td>${item.P2}</td>
                            <td>${item.P4}</td>
                            <td>${item.P5}</td>
                            <td>${item.Ptelf}</td>
                            <td>${item.P6}</td>
                            <td>${item.P6d}</td> 
                            <td>${item.P7}</td>
                            <td>${item.P8}</td>
                            <td>${item.P9}</td>
                            <td>${item.P10}</td>
                            <td>${item.P11}</td>
                            <td>${item.P12}</td>
                            <td>${item.P13}</td>
                            <td>${item.P14}</td>
                            <td>${item.P15}</td>
                            <td>${item.P16}</td>
                            <td>${item.P17}</td>
                            <td>${item.P18}</td>
                            <td>${item.P19}</td>
                            <td>${item.P20}</td>
                            <td>${item.P21}</td>
                            <td>${item.P22}</td>
                            <td>${item.P23}</td>
                            <td>${item.P24}</td>
                            <td>${item.P25}</td>
                            <td>${item.P26}</td>
                            <td>${item.P27}</td>
                            <td>${item.P28}</td>
                            <td>${item.P29}</td>
                            <td>${item.P30}</td>
                            <td>${item.P31}</td>
                            <td>${item.P32}</td>
                            <td>${item.P33}</td>
                            <td>${item.P34}</td>
                            <td>${item.P35}</td>
                            <td>${item.P36}</td>
                            <td>${item.P37}</td>
                            <td>${item.P38}</td>
                            <td>${item.P391}</td>
                            <td>${item.P392}</td>
                            <td>${item.P393}</td>
                            <td>${item.P394}</td>
                            <td>${item.P395}</td>
                            <td>${item.P39d}</td>
                            <td>${item.P41}</td>
                            <td>${item.P41d}</td>
                            <td>${item.P42}</td>
                            <td>${item.P42d}</td>
                            <td>${item.P43}</td>
                            <td>${item.P44}</td>
                            <td>${item.P45}</td>
                            <td>${item.P45d}</td>
                            <td>${item.P46}</td>
                            <td>${item.P47}</td>
                            <td>${item.P48}</td>
                            <td>${item.P50n}</td>
                            <td>${item.P501}</td>
                            <td>${item.P502}</td>
                            <td>${item.P503}</td>
                            <td>${item.P504}</td>
                            <td>${item.P505}</td>
                            <td>${item.P506}</td>
                            <td>${item.P507}</td>
                            <td>${item.P508}</td>
                            <td>${item.P51}</td>
                            <td>${item.P52n}</td>
                            <td>${item.P521}</td>
                            <td>${item.P522}</td>
                            <td>${item.P523}</td>
                            <td>${item.P524}</td>
                            <td>${item.P525}</td>
                            <td>${item.P526}</td>
                            <td>${item.P527}</td>
                            <td>${item.P528}</td>
                            <td>${item.P53n}</td>
                            <td>${item.P531}</td>
                            <td>${item.P532}</td>
                            <td>${item.P533}</td>
                            <td>${item.P534}</td>
                            <td>${item.P535}</td>
                            <td>${item.P536}</td>
                            <td>${item.P537}</td>
                            <td>${item.P538}</td>
                            <td>${item.P54n}</td>
                            <td>${item.P541}</td>
                            <td>${item.P542}</td>
                            <td>${item.P543}</td>
                            <td>${item.P544}</td>
                            <td>${item.P545}</td>
                            <td>${item.P546}</td>
                            <td>${item.P547}</td>
                            <td>${item.P548}</td>
                            <td>${item.P55n}</td>
                            <td>${item.P551}</td>
                            <td>${item.P552}</td>
                            <td>${item.P553}</td>
                            <td>${item.P554}</td>
                            <td>${item.P555}</td>
                            <td>${item.P556}</td>
                            <td>${item.P557}</td>
                            <td>${item.P558}</td>
                            <td>${item.P56n}</td>
                            <td>${item.P561}</td>
                            <td>${item.P562}</td>
                            <td>${item.P563}</td>
                            <td>${item.P564}</td>
                            <td>${item.P565}</td>
                            <td>${item.P566}</td>
                            <td>${item.P567}</td>
                            <td>${item.P568}</td>
                            <td>${item.P57}</td>
                            <td>${item.P58}</td>
                            <td>${item.P59}</td>
                            <td>${item.P60}</td>
                            <td>${item.P61n}</td>
                            <td>${item.P611}</td>
                            <td>${item.P612}</td>
                            <td>${item.P613}</td>
                            <td>${item.P614}</td>
                            <td>${item.P615}</td>
                            <td>${item.P616}</td>
                            <td>${item.P617}</td>
                            <td>${item.P618}</td>
                            <td>${item.P62n}</td>
                            <td>${item.P621}</td>
                            <td>${item.P622}</td>
                            <td>${item.P623}</td>
                            <td>${item.P624}</td>
                            <td>${item.P625}</td>
                            <td>${item.P626}</td>
                            <td>${item.P627}</td>
                            <td>${item.P628}</td>
                            <td>${item.P63n}</td>
                            <td>${item.P631}</td>
                            <td>${item.P632}</td>
                            <td>${item.P633}</td>
                            <td>${item.P634}</td>
                            <td>${item.P635}</td>
                            <td>${item.P636}</td>
                            <td>${item.P637}</td>
                            <td>${item.P638}</td>
                            <td>${item.P64n}</td>
                            <td>${item.P641}</td>
                            <td>${item.P642}</td>
                            <td>${item.P643}</td>
                            <td>${item.P644}</td>
                            <td>${item.P645}</td>
                            <td>${item.P646}</td>
                            <td>${item.P647}</td>
                            <td>${item.P648}</td>
                            <td>${item.P65}</td>
                            <td>${item.P66n}</td>
                            <td>${item.P661}</td>
                            <td>${item.P662}</td>
                            <td>${item.P663}</td>
                            <td>${item.P664}</td>
                            <td>${item.P665}</td>
                            <td>${item.P666}</td>
                            <td>${item.P667}</td>
                            <td>${item.P668}</td>
                            <td>${item.P67}</td>
                            <td>${item.P68}</td>
                            <td>${item.P69}</td>
                            <td>${item.P691}</td>
                            <td>${item.P70n}</td>
                            <td>${item.P701}</td>
                            <td>${item.P702}</td>
                            <td>${item.P703}</td>
                            <td>${item.P704}</td>
                            <td>${item.P705}</td>
                            <td>${item.P706}</td>
                            <td>${item.P707}</td>
                            <td>${item.P708}</td>
                            <td>${item.P71}</td>
                            <td>${item.P72n}</td>
                            <td>${item.P721}</td>
                            <td>${item.P722}</td>
                            <td>${item.P723}</td>
                            <td>${item.P724}</td>
                            <td>${item.P725}</td>
                            <td>${item.P726}</td>
                            <td>${item.P727}</td>
                            <td>${item.P728}</td>
                            <td>${item.P73n}</td>
                            <td>${item.P731}</td>
                            <td>${item.P732}</td>
                            <td>${item.P733}</td>
                            <td>${item.P734}</td>
                            <td>${item.P735}</td>
                            <td>${item.P736}</td>
                            <td>${item.P737}</td>
                            <td>${item.P738}</td>
                            <td>${item.P74n}</td>
                            <td>${item.P741}</td>
                            <td>${item.P742}</td>
                            <td>${item.P743}</td>
                            <td>${item.P744}</td>
                            <td>${item.P745}</td>
                            <td>${item.P746}</td>
                            <td>${item.P747}</td>
                            <td>${item.P748}</td>
                            <td>${item.P75n}</td>
                            <td>${item.P751}</td>
                            <td>${item.P752}</td>
                            <td>${item.P753}</td>
                            <td>${item.P754}</td>
                            <td>${item.P755}</td>
                            <td>${item.P756}</td>
                            <td>${item.P757}</td>
                            <td>${item.P758}</td>
                            <td>${item.P76n}</td>
                            <td>${item.P761}</td>
                            <td>${item.P762}</td>
                            <td>${item.P763}</td>
                            <td>${item.P764}</td>
                            <td>${item.P765}</td>
                            <td>${item.P766}</td>
                            <td>${item.P767}</td>
                            <td>${item.P768}</td>
                            <td>${item.P77}</td>
                            <td>${item.P78}</td>
                            <td>${item.P79}</td>
                            <td>${item.P80}</td>
                            <td>${item.P81n}</td>
                            <td>${item.P811}</td>
                            <td>${item.P812}</td>
                            <td>${item.P813}</td>
                            <td>${item.P814}</td>
                            <td>${item.P815}</td>
                            <td>${item.P816}</td>
                            <td>${item.P817}</td>
                            <td>${item.P818}</td>
                            <td>${item.P82n}</td>
                            <td>${item.P821}</td>
                            <td>${item.P822}</td>
                            <td>${item.P823}</td>
                            <td>${item.P824}</td>
                            <td>${item.P825}</td>
                            <td>${item.P826}</td>
                            <td>${item.P827}</td>
                            <td>${item.P828}</td>
                            <td>${item.P83n}</td>
                            <td>${item.P831}</td>
                            <td>${item.P832}</td>
                            <td>${item.P833}</td>
                            <td>${item.P834}</td>
                            <td>${item.P835}</td>
                            <td>${item.P836}</td>
                            <td>${item.P837}</td>
                            <td>${item.P838}</td>
                            <td>${item.P84n}</td>
                            <td>${item.P841}</td>
                            <td>${item.P842}</td>
                            <td>${item.P843}</td>
                            <td>${item.P844}</td>
                            <td>${item.P845}</td>
                            <td>${item.P846}</td>
                            <td>${item.P847}</td>
                            <td>${item.P848}</td>
                            <td>${item.P85}</td>
                            <td>${item.P86n}</td>
                            <td>${item.P861}</td>
                            <td>${item.P862}</td>
                            <td>${item.P863}</td>
                            <td>${item.P864}</td>
                            <td>${item.P865}</td>
                            <td>${item.P866}</td>
                            <td>${item.P867}</td>
                            <td>${item.P868}</td>
                            <td>${item.P87}</td>
                        </tr>`;
        });
      } else {
        str = `<tr><td colspan="9" class="text-center">¡No hay cuestionarios!</td></tr>`;
      }

      document.getElementById("table_data_all").innerHTML = str;
    });
}

function mostrar_usuario(id) {
  fetch(`controllers/MostrarUsuarioController.php?id=${id}`)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("id").value = id;
      document.getElementById("id_encuesta").value = data.Id_encuesta;
      document.getElementById("p1").value = data.P1;
      document.getElementById("p2").value = data.P2;
      document.getElementById("p4").value = data.P4;
      document.getElementById("p5").value = data.P5;
      document.getElementById("ptelf").value = data.Ptelf;
      document.getElementById("p6").value = data.P6;
      document.getElementById("p6d").value = data.P6d;
      document.getElementById("p7").value = data.P7;
      document.getElementById("p8").value = data.P8;
      document.getElementById("p9").value = data.P9;
      document.getElementById("p10").value = data.P10;
      document.getElementById("p11").value = data.P11;
      document.getElementById("p12").value = data.P12;
      document.getElementById("p13n").checked = data.P13 == 0;
      document.getElementById("p13s").checked = data.P13 == 1;
      document.getElementById("p14n").checked = data.P14 == 0;
      document.getElementById("p14s").checked = data.P14 == 1;
      document.getElementById("p15n").checked = data.P15 == 0;
      document.getElementById("p15s").checked = data.P15 == 1;
      document.getElementById("p16n").checked = data.P16 == 0;
      document.getElementById("p16s").checked = data.P16 == 1;
      document.getElementById("p17n").checked = data.P17 == 0;
      document.getElementById("p17s").checked = data.P17 == 1;
      document.getElementById("p18n").checked = data.P18 == 0;
      document.getElementById("p18s").checked = data.P18 == 1;
      document.getElementById("p19n").checked = data.P19 == 0;
      document.getElementById("p19s").checked = data.P19 == 1;
      document.getElementById("p20n").checked = data.P20 == 0;
      document.getElementById("p20s").checked = data.P20 == 1;
      document.getElementById("p21s").checked = data.P21 == 1;
      document.getElementById("p21n").checked = data.P21 == 0;
      document.getElementById("p22s").checked = data.P22 == 1;
      document.getElementById("p22n").checked = data.P22 == 0;
      document.getElementById("p23n").checked = data.P23 == 0;
      document.getElementById("p23s").checked = data.P23 == 1;
      document.getElementById("p24n").checked = data.P24 == 0;
      document.getElementById("p24s").checked = data.P24 == 1;
      document.getElementById("p25s").checked = data.P25 == 1;
      document.getElementById("p25n").checked = data.P25 == 0;
      document.getElementById("p26s").checked = data.P26 == 1;
      document.getElementById("p26n").checked = data.P26 == 0;
      document.getElementById("p27n").checked = data.P27 == 0;
      document.getElementById("p27s").checked = data.P27 == 1;
      document.getElementById("p28n").checked = data.P28 == 0;
      document.getElementById("p28s").checked = data.P28 == 1;
      document.getElementById("p29i").checked = data.P29 == 2;
      document.getElementById("p29s").checked = data.P29 == 1;
      document.getElementById("p29n").checked = data.P29 == 0;
      document.getElementById("p30i").checked = data.P30 == 2;
      document.getElementById("p30s").checked = data.P30 == 1;
      document.getElementById("p30n").checked = data.P30 == 0;
      document.getElementById("p31").value = data.P31;
      document.getElementById("p32").value = data.P32;
      document.getElementById("p33i").checked = data.P33 == 2;
      document.getElementById("p33s").checked = data.P33 == 1;
      document.getElementById("p33n").checked = data.P33 == 0;
      document.getElementById("p34").value = data.P34;
      document.getElementById("p35i").checked = data.P35 == 2;
      document.getElementById("p35s").checked = data.P35 == 1;
      document.getElementById("p35n").checked = data.P35 == 0;
      document.getElementById("p36i").checked = data.P36 == 2;
      document.getElementById("p36s").checked = data.P36 == 1;
      document.getElementById("p36n").checked = data.P36 == 0;
      document.getElementById("p37i").checked = data.P37 == 2;
      document.getElementById("p37s").checked = data.P37 == 1;
      document.getElementById("p37n").checked = data.P37 == 0;
      document.getElementById("p38").value = data.P38;
      document.getElementById("p391x").checked = data.P391 == 1;
      document.getElementById("p392g").checked = data.P392 == 1;
      document.getElementById("p393m").checked = data.P393 == 1;
      document.getElementById("p394b").checked = data.P394 == 1;
      document.getElementById("p395o").checked = data.P395 == 1;
      document.getElementById("p39d").value = data.P39d;
      document.getElementById("p41").value = data.P41;
      document.getElementById("p41d").value = data.P41d;
      document.getElementById("p42").value = data.P42;
      document.getElementById("p42d").value = data.P42d;
      document.getElementById("p43i").checked = data.P43 == 2;
      document.getElementById("p43s").checked = data.P43 == 1;
      document.getElementById("p43n").checked = data.P43 == 0;
      document.getElementById("p44i").checked = data.P44 == 2;
      document.getElementById("p44s").checked = data.P44 == 1;
      document.getElementById("p44n").checked = data.P44 == 0;
      document.getElementById("p45i").checked = data.P45 == 2;
      document.getElementById("p45s").checked = data.P45 == 1;
      document.getElementById("p45n").checked = data.P45 == 0;
      document.getElementById("p45d").value = data.P45d;
      document.getElementById("p46i").checked = data.P46 == 2;
      document.getElementById("p46s").checked = data.P46 == 1;
      document.getElementById("p46n").checked = data.P46 == 0;
      document.getElementById("p47").value = data.P47;
      document.getElementById("p48").value = data.P48;
      document.getElementById("p50n").checked = data.P50n == 1;
      document.getElementById("p501").checked = data.P501 == 1;
      document.getElementById("p502").checked = data.P502 == 1;
      document.getElementById("p503").checked = data.P503 == 1;
      document.getElementById("p504").checked = data.P504 == 1;
      document.getElementById("p505").checked = data.P505 == 1;
      document.getElementById("p506").checked = data.P506 == 1;
      document.getElementById("p507").checked = data.P507 == 1;
      document.getElementById("p508").checked = data.P508 == 1;
      document.getElementById("p51").value = data.P51;
      document.getElementById("p52n").checked = data.P52n == 1;
      document.getElementById("p521").checked = data.P521 == 1;
      document.getElementById("p522").checked = data.P522 == 1;
      document.getElementById("p523").checked = data.P523 == 1;
      document.getElementById("p524").checked = data.P524 == 1;
      document.getElementById("p525").checked = data.P525 == 1;
      document.getElementById("p526").checked = data.P526 == 1;
      document.getElementById("p527").checked = data.P527 == 1;
      document.getElementById("p528").checked = data.P528 == 1;
      document.getElementById("p53n").checked = data.P53n == 1;
      document.getElementById("p531").checked = data.P531 == 1;
      document.getElementById("p532").checked = data.P532 == 1;
      document.getElementById("p533").checked = data.P533 == 1;
      document.getElementById("p534").checked = data.P534 == 1;
      document.getElementById("p535").checked = data.P535 == 1;
      document.getElementById("p536").checked = data.P536 == 1;
      document.getElementById("p537").checked = data.P537 == 1;
      document.getElementById("p538").checked = data.P538 == 1;
      document.getElementById("p54n").checked = data.P54n == 1;
      document.getElementById("p541").checked = data.P541 == 1;
      document.getElementById("p542").checked = data.P542 == 1;
      document.getElementById("p543").checked = data.P543 == 1;
      document.getElementById("p544").checked = data.P544 == 1;
      document.getElementById("p545").checked = data.P545 == 1;
      document.getElementById("p546").checked = data.P546 == 1;
      document.getElementById("p547").checked = data.P547 == 1;
      document.getElementById("p548").checked = data.P548 == 1;
      document.getElementById("p55n").checked = data.P55n == 1;
      document.getElementById("p551").checked = data.P551 == 1;
      document.getElementById("p552").checked = data.P552 == 1;
      document.getElementById("p553").checked = data.P553 == 1;
      document.getElementById("p554").checked = data.P554 == 1;
      document.getElementById("p555").checked = data.P555 == 1;
      document.getElementById("p556").checked = data.P556 == 1;
      document.getElementById("p557").checked = data.P557 == 1;
      document.getElementById("p558").checked = data.P558 == 1;
      document.getElementById("p56n").checked = data.P56n == 1;
      document.getElementById("p561").checked = data.P561 == 1;
      document.getElementById("p562").checked = data.P562 == 1;
      document.getElementById("p563").checked = data.P563 == 1;
      document.getElementById("p564").checked = data.P564 == 1;
      document.getElementById("p565").checked = data.P565 == 1;
      document.getElementById("p566").checked = data.P566 == 1;
      document.getElementById("p567").checked = data.P567 == 1;
      document.getElementById("p568").checked = data.P568 == 1;
      document.getElementById("p57n").checked = data.P57 == 0;
      document.getElementById("p57s").checked = data.P57 == 1;
      document.getElementById("p58n").checked = data.P58 == 0;
      document.getElementById("p58s").checked = data.P58 == 1;
      document.getElementById("p59n").checked = data.P59 == 0;
      document.getElementById("p59s").checked = data.P59 == 1;
      document.getElementById("p60n").checked = data.P60 == 0;
      document.getElementById("p60s").checked = data.P60 == 1;
      document.getElementById("p61n").checked = data.P61n == 1;
      document.getElementById("p611").checked = data.P611 == 1;
      document.getElementById("p612").checked = data.P612 == 1;
      document.getElementById("p613").checked = data.P613 == 1;
      document.getElementById("p614").checked = data.P614 == 1;
      document.getElementById("p615").checked = data.P615 == 1;
      document.getElementById("p616").checked = data.P616 == 1;
      document.getElementById("p617").checked = data.P617 == 1;
      document.getElementById("p618").checked = data.P618 == 1;
      document.getElementById("p62n").checked = data.P62n == 1;
      document.getElementById("p621").checked = data.P621 == 1;
      document.getElementById("p622").checked = data.P622 == 1;
      document.getElementById("p623").checked = data.P623 == 1;
      document.getElementById("p624").checked = data.P624 == 1;
      document.getElementById("p625").checked = data.P625 == 1;
      document.getElementById("p626").checked = data.P626 == 1;
      document.getElementById("p627").checked = data.P627 == 1;
      document.getElementById("p628").checked = data.P628 == 1;
      document.getElementById("p63n").checked = data.P63n == 1;
      document.getElementById("p631").checked = data.P631 == 1;
      document.getElementById("p632").checked = data.P632 == 1;
      document.getElementById("p633").checked = data.P633 == 1;
      document.getElementById("p634").checked = data.P634 == 1;
      document.getElementById("p635").checked = data.P635 == 1;
      document.getElementById("p636").checked = data.P636 == 1;
      document.getElementById("p637").checked = data.P637 == 1;
      document.getElementById("p638").checked = data.P638 == 1;
      document.getElementById("p64n").checked = data.P64n == 1;
      document.getElementById("p641").checked = data.P641 == 1;
      document.getElementById("p642").checked = data.P642 == 1;
      document.getElementById("p643").checked = data.P643 == 1;
      document.getElementById("p644").checked = data.P644 == 1;
      document.getElementById("p645").checked = data.P645 == 1;
      document.getElementById("p646").checked = data.P646 == 1;
      document.getElementById("p647").checked = data.P647 == 1;
      document.getElementById("p648").checked = data.P648 == 1;
      document.getElementById("p65s").checked = data.P65 == 1;
      document.getElementById("p65n").checked = data.P65 == 0;
      document.getElementById("p66n").checked = data.P66n == 1;
      document.getElementById("p661").checked = data.P661 == 1;
      document.getElementById("p662").checked = data.P662 == 1;
      document.getElementById("p663").checked = data.P663 == 1;
      document.getElementById("p664").checked = data.P664 == 1;
      document.getElementById("p665").checked = data.P665 == 1;
      document.getElementById("p666").checked = data.P666 == 1;
      document.getElementById("p667").checked = data.P667 == 1;
      document.getElementById("p668").checked = data.P668 == 1;
      document.getElementById("p67s").checked = data.P67 == 1;
      document.getElementById("p67n").checked = data.P67 == 0;
      document.getElementById("p68").value = data.P68;
      document.getElementById("p69").value = data.P69;
      document.getElementById("p691").value = data.P691;
      document.getElementById("p70n").checked = data.P70n == 1;
      document.getElementById("p701").checked = data.P701 == 1;
      document.getElementById("p702").checked = data.P702 == 1;
      document.getElementById("p703").checked = data.P703 == 1;
      document.getElementById("p704").checked = data.P704 == 1;
      document.getElementById("p705").checked = data.P705 == 1;
      document.getElementById("p706").checked = data.P706 == 1;
      document.getElementById("p707").checked = data.P707 == 1;
      document.getElementById("p708").checked = data.P708 == 1;
      document.getElementById("p71").value = data.P71;
      document.getElementById("p72n").checked = data.P72n == 1;
      document.getElementById("p721").checked = data.P721 == 1;
      document.getElementById("p722").checked = data.P722 == 1;
      document.getElementById("p723").checked = data.P723 == 1;
      document.getElementById("p724").checked = data.P724 == 1;
      document.getElementById("p725").checked = data.P725 == 1;
      document.getElementById("p726").checked = data.P726 == 1;
      document.getElementById("p727").checked = data.P727 == 1;
      document.getElementById("p728").checked = data.P728 == 1;
      document.getElementById("p73n").checked = data.P73n == 1;
      document.getElementById("p731").checked = data.P731 == 1;
      document.getElementById("p732").checked = data.P732 == 1;
      document.getElementById("p733").checked = data.P733 == 1;
      document.getElementById("p734").checked = data.P734 == 1;
      document.getElementById("p735").checked = data.P735 == 1;
      document.getElementById("p736").checked = data.P736 == 1;
      document.getElementById("p737").checked = data.P737 == 1;
      document.getElementById("p738").checked = data.P738 == 1;
      document.getElementById("p74n").checked = data.P74n == 1;
      document.getElementById("p741").checked = data.P741 == 1;
      document.getElementById("p742").checked = data.P742 == 1;
      document.getElementById("p743").checked = data.P743 == 1;
      document.getElementById("p744").checked = data.P744 == 1;
      document.getElementById("p745").checked = data.P745 == 1;
      document.getElementById("p746").checked = data.P746 == 1;
      document.getElementById("p747").checked = data.P747 == 1;
      document.getElementById("p748").checked = data.P748 == 1;
      document.getElementById("p75n").checked = data.P75n == 1;
      document.getElementById("p751").checked = data.P751 == 1;
      document.getElementById("p752").checked = data.P752 == 1;
      document.getElementById("p753").checked = data.P753 == 1;
      document.getElementById("p754").checked = data.P754 == 1;
      document.getElementById("p755").checked = data.P755 == 1;
      document.getElementById("p756").checked = data.P756 == 1;
      document.getElementById("p757").checked = data.P757 == 1;
      document.getElementById("p758").checked = data.P758 == 1;
      document.getElementById("p76n").checked = data.P76n == 1;
      document.getElementById("p761").checked = data.P761 == 1;
      document.getElementById("p762").checked = data.P762 == 1;
      document.getElementById("p763").checked = data.P763 == 1;
      document.getElementById("p764").checked = data.P764 == 1;
      document.getElementById("p765").checked = data.P765 == 1;
      document.getElementById("p766").checked = data.P766 == 1;
      document.getElementById("p767").checked = data.P767 == 1;
      document.getElementById("p768").checked = data.P768 == 1;
      document.getElementById("p77n").checked = data.P77 == 0;
      document.getElementById("p77s").checked = data.P77 == 1;
      document.getElementById("p78n").checked = data.P78 == 0;
      document.getElementById("p78s").checked = data.P78 == 1;
      document.getElementById("p79n").checked = data.P79 == 0;
      document.getElementById("p79s").checked = data.P79 == 1;
      document.getElementById("p80n").checked = data.P80 == 0;
      document.getElementById("p80s").checked = data.P80 == 1;
      document.getElementById("p81n").checked = data.P81n == 1;
      document.getElementById("p811").checked = data.P811 == 1;
      document.getElementById("p812").checked = data.P812 == 1;
      document.getElementById("p813").checked = data.P813 == 1;
      document.getElementById("p814").checked = data.P814 == 1;
      document.getElementById("p815").checked = data.P815 == 1;
      document.getElementById("p816").checked = data.P816 == 1;
      document.getElementById("p817").checked = data.P817 == 1;
      document.getElementById("p818").checked = data.P818 == 1;
      document.getElementById("p82n").checked = data.P82n == 1;
      document.getElementById("p821").checked = data.P821 == 1;
      document.getElementById("p822").checked = data.P822 == 1;
      document.getElementById("p823").checked = data.P823 == 1;
      document.getElementById("p824").checked = data.P824 == 1;
      document.getElementById("p825").checked = data.P825 == 1;
      document.getElementById("p826").checked = data.P826 == 1;
      document.getElementById("p827").checked = data.P827 == 1;
      document.getElementById("p828").checked = data.P828 == 1;
      document.getElementById("p83n").checked = data.P83n == 1;
      document.getElementById("p831").checked = data.P831 == 1;
      document.getElementById("p832").checked = data.P832 == 1;
      document.getElementById("p833").checked = data.P833 == 1;
      document.getElementById("p834").checked = data.P834 == 1;
      document.getElementById("p835").checked = data.P835 == 1;
      document.getElementById("p836").checked = data.P836 == 1;
      document.getElementById("p837").checked = data.P837 == 1;
      document.getElementById("p838").checked = data.P838 == 1;
      document.getElementById("p84n").checked = data.P84n == 1;
      document.getElementById("p841").checked = data.P841 == 1;
      document.getElementById("p842").checked = data.P842 == 1;
      document.getElementById("p843").checked = data.P843 == 1;
      document.getElementById("p844").checked = data.P844 == 1;
      document.getElementById("p845").checked = data.P845 == 1;
      document.getElementById("p846").checked = data.P846 == 1;
      document.getElementById("p847").checked = data.P847 == 1;
      document.getElementById("p848").checked = data.P848 == 1;
      document.getElementById("p85s").checked = data.P85 == 1;
      document.getElementById("p85n").checked = data.P85 == 0;
      document.getElementById("p86n").checked = data.P86n == 1;
      document.getElementById("p861").checked = data.P861 == 1;
      document.getElementById("p862").checked = data.P862 == 1;
      document.getElementById("p863").checked = data.P863 == 1;
      document.getElementById("p864").checked = data.P864 == 1;
      document.getElementById("p865").checked = data.P865 == 1;
      document.getElementById("p866").checked = data.P866 == 1;
      document.getElementById("p867").checked = data.P867 == 1;
      document.getElementById("p868").checked = data.P868 == 1;
      document.getElementById("p87s").checked = data.P87 == 1;
      document.getElementById("p87n").checked = data.P87 == 0;
    })
    .then(() => {
      mostrar_Actualizar();
      ocultar_Listar();
    });
}

function guardar_usuario() {
  if (document.getElementById("id_encuesta").value !=""){
  let formData = new FormData();
  formData.append("id", document.getElementById("id").value);
  formData.append("Id_encuesta", document.getElementById("id_encuesta").value);
  formData.append("P1", document.getElementById("p1").value);
  formData.append("P2", document.getElementById("p2").value);
  formData.append("P4", document.getElementById("p4").value);
  formData.append("P5", document.getElementById("p5").value);
  formData.append("Ptelf", document.getElementById("ptelf").value);
  formData.append("P6", document.getElementById("p6").value);
  formData.append("P6d", document.getElementById("p6d").value);
  formData.append("P7", document.getElementById("p7").value);
  formData.append("P8", document.getElementById("p8").value);
  formData.append("P9", document.getElementById("p9").value);
  formData.append("P10", document.getElementById("p10").value);
  formData.append("P11", document.getElementById("p11").value);
  formData.append("P12", document.getElementById("p12").value);
  formData.append(
    "P13",
    document.querySelector('input[name="p13"]:checked').value
  );
  formData.append(
    "P14",
    document.querySelector('input[name="p14"]:checked').value
  );
  formData.append(
    "P15",
    document.querySelector('input[name="p15"]:checked').value
  );
  formData.append(
    "P16",
    document.querySelector('input[name="p16"]:checked').value
  );
  formData.append(
    "P17",
    document.querySelector('input[name="p17"]:checked').value
  );
  formData.append(
    "P18",
    document.querySelector('input[name="p18"]:checked').value
  );
  formData.append(
    "P19",
    document.querySelector('input[name="p19"]:checked').value
  );
  formData.append(
    "P20",
    document.querySelector('input[name="p20"]:checked').value
  );
  formData.append(
    "P21",
    document.querySelector('input[name="p21"]:checked').value
  );
  formData.append(
    "P22",
    document.querySelector('input[name="p22"]:checked').value
  );
  formData.append(
    "P23",
    document.querySelector('input[name="p23"]:checked').value
  );
  formData.append(
    "P24",
    document.querySelector('input[name="p24"]:checked').value
  );
  formData.append(
    "P25",
    document.querySelector('input[name="p25"]:checked').value
  );
  formData.append(
    "P26",
    document.querySelector('input[name="p26"]:checked').value
  );
  formData.append(
    "P27",
    document.querySelector('input[name="p27"]:checked').value
  );
  formData.append(
    "P28",
    document.querySelector('input[name="p28"]:checked').value
  );
  formData.append(
    "P29",
    document.querySelector('input[name="p29"]:checked').value
  );
  formData.append(
    "P30",
    document.querySelector('input[name="p30"]:checked').value
  );
  formData.append("P31", document.getElementById("p31").value);
  formData.append("P32", document.getElementById("p32").value);
  formData.append(
    "P33",
    document.querySelector('input[name="p33"]:checked').value
  );
  formData.append("P34", document.getElementById("p34").value);
  formData.append(
    "P35",
    document.querySelector('input[name="p35"]:checked').value
  );
  formData.append(
    "P36",
    document.querySelector('input[name="p36"]:checked').value
  );
  formData.append(
    "P37",
    document.querySelector('input[name="p37"]:checked').value
  );
  formData.append("P38", document.getElementById("p38").value);
  formData.append("P391", document.getElementById("p391x").checked ? 1 : 0);
  formData.append("P392", document.getElementById("p392g").checked ? 1 : 0);
  formData.append("P393", document.getElementById("p393m").checked ? 1 : 0);
  formData.append("P394", document.getElementById("p394b").checked ? 1 : 0);
  formData.append("P395", document.getElementById("p395o").checked ? 1 : 0);
  formData.append("P39d", document.getElementById("p39d").value);
  formData.append("P41", document.getElementById("p41").value);
  formData.append("P41d", document.getElementById("p41d").value);
  formData.append("P42", document.getElementById("p42").value);
  formData.append("P42d", document.getElementById("p42d").value);
  formData.append(
    "P43",
    document.querySelector('input[name="p43"]:checked').value
  );
  formData.append(
    "P44",
    document.querySelector('input[name="p44"]:checked').value
  );
  formData.append(
    "P45",
    document.querySelector('input[name="p45"]:checked').value
  );
  formData.append("P45d", document.getElementById("p45d").value);
  formData.append(
    "P46",
    document.querySelector('input[name="p46"]:checked').value
  );
  formData.append("P47", document.getElementById("p47").value);
  formData.append("P48", document.getElementById("p48").value);
  formData.append("P50n", document.getElementById("p50n").checked ? 1 : 0);
  formData.append("P501", document.getElementById("p501").checked ? 1 : 0);
  formData.append("P502", document.getElementById("p502").checked ? 1 : 0);
  formData.append("P503", document.getElementById("p503").checked ? 1 : 0);
  formData.append("P504", document.getElementById("p504").checked ? 1 : 0);
  formData.append("P505", document.getElementById("p505").checked ? 1 : 0);
  formData.append("P506", document.getElementById("p506").checked ? 1 : 0);
  formData.append("P507", document.getElementById("p507").checked ? 1 : 0);
  formData.append("P508", document.getElementById("p508").checked ? 1 : 0);
  formData.append("P51", document.getElementById("p51").value);
  formData.append("P52n", document.getElementById("p52n").checked ? 1 : 0);
  formData.append("P521", document.getElementById("p521").checked ? 1 : 0);
  formData.append("P522", document.getElementById("p522").checked ? 1 : 0);
  formData.append("P523", document.getElementById("p523").checked ? 1 : 0);
  formData.append("P524", document.getElementById("p524").checked ? 1 : 0);
  formData.append("P525", document.getElementById("p525").checked ? 1 : 0);
  formData.append("P526", document.getElementById("p526").checked ? 1 : 0);
  formData.append("P527", document.getElementById("p527").checked ? 1 : 0);
  formData.append("P528", document.getElementById("p528").checked ? 1 : 0);
  formData.append("P53n", document.getElementById("p53n").checked ? 1 : 0);
  formData.append("P531", document.getElementById("p531").checked ? 1 : 0);
  formData.append("P532", document.getElementById("p532").checked ? 1 : 0);
  formData.append("P533", document.getElementById("p533").checked ? 1 : 0);
  formData.append("P534", document.getElementById("p534").checked ? 1 : 0);
  formData.append("P535", document.getElementById("p535").checked ? 1 : 0);
  formData.append("P536", document.getElementById("p536").checked ? 1 : 0);
  formData.append("P537", document.getElementById("p537").checked ? 1 : 0);
  formData.append("P538", document.getElementById("p538").checked ? 1 : 0);
  formData.append("P54n", document.getElementById("p54n").checked ? 1 : 0);
  formData.append("P541", document.getElementById("p541").checked ? 1 : 0);
  formData.append("P542", document.getElementById("p542").checked ? 1 : 0);
  formData.append("P543", document.getElementById("p543").checked ? 1 : 0);
  formData.append("P544", document.getElementById("p544").checked ? 1 : 0);
  formData.append("P545", document.getElementById("p545").checked ? 1 : 0);
  formData.append("P546", document.getElementById("p546").checked ? 1 : 0);
  formData.append("P547", document.getElementById("p547").checked ? 1 : 0);
  formData.append("P548", document.getElementById("p548").checked ? 1 : 0);
  formData.append("P55n", document.getElementById("p55n").checked ? 1 : 0);
  formData.append("P551", document.getElementById("p551").checked ? 1 : 0);
  formData.append("P552", document.getElementById("p552").checked ? 1 : 0);
  formData.append("P553", document.getElementById("p553").checked ? 1 : 0);
  formData.append("P554", document.getElementById("p554").checked ? 1 : 0);
  formData.append("P555", document.getElementById("p555").checked ? 1 : 0);
  formData.append("P556", document.getElementById("p556").checked ? 1 : 0);
  formData.append("P557", document.getElementById("p557").checked ? 1 : 0);
  formData.append("P558", document.getElementById("p558").checked ? 1 : 0);
  formData.append("P56n", document.getElementById("p56n").checked ? 1 : 0);
  formData.append("P561", document.getElementById("p561").checked ? 1 : 0);
  formData.append("P562", document.getElementById("p562").checked ? 1 : 0);
  formData.append("P563", document.getElementById("p563").checked ? 1 : 0);
  formData.append("P564", document.getElementById("p564").checked ? 1 : 0);
  formData.append("P565", document.getElementById("p565").checked ? 1 : 0);
  formData.append("P566", document.getElementById("p566").checked ? 1 : 0);
  formData.append("P567", document.getElementById("p567").checked ? 1 : 0);
  formData.append("P568", document.getElementById("p568").checked ? 1 : 0);
  formData.append(
    "P57",
    document.querySelector('input[name="p57"]:checked').value
  );
  formData.append(
    "P58",
    document.querySelector('input[name="p58"]:checked').value
  );
  formData.append(
    "P59",
    document.querySelector('input[name="p59"]:checked').value
  );
  formData.append(
    "P60",
    document.querySelector('input[name="p60"]:checked').value
  );
  formData.append("P61n", document.getElementById("p61n").checked ? 1 : 0);
  formData.append("P611", document.getElementById("p611").checked ? 1 : 0);
  formData.append("P612", document.getElementById("p612").checked ? 1 : 0);
  formData.append("P613", document.getElementById("p613").checked ? 1 : 0);
  formData.append("P614", document.getElementById("p614").checked ? 1 : 0);
  formData.append("P615", document.getElementById("p615").checked ? 1 : 0);
  formData.append("P616", document.getElementById("p616").checked ? 1 : 0);
  formData.append("P617", document.getElementById("p617").checked ? 1 : 0);
  formData.append("P618", document.getElementById("p618").checked ? 1 : 0);
  formData.append("P62n", document.getElementById("p62n").checked ? 1 : 0);
  formData.append("P621", document.getElementById("p621").checked ? 1 : 0);
  formData.append("P622", document.getElementById("p622").checked ? 1 : 0);
  formData.append("P623", document.getElementById("p623").checked ? 1 : 0);
  formData.append("P624", document.getElementById("p624").checked ? 1 : 0);
  formData.append("P625", document.getElementById("p625").checked ? 1 : 0);
  formData.append("P626", document.getElementById("p626").checked ? 1 : 0);
  formData.append("P627", document.getElementById("p627").checked ? 1 : 0);
  formData.append("P628", document.getElementById("p628").checked ? 1 : 0);
  formData.append("P63n", document.getElementById("p63n").checked ? 1 : 0);
  formData.append("P631", document.getElementById("p631").checked ? 1 : 0);
  formData.append("P632", document.getElementById("p632").checked ? 1 : 0);
  formData.append("P633", document.getElementById("p633").checked ? 1 : 0);
  formData.append("P634", document.getElementById("p634").checked ? 1 : 0);
  formData.append("P635", document.getElementById("p635").checked ? 1 : 0);
  formData.append("P636", document.getElementById("p636").checked ? 1 : 0);
  formData.append("P637", document.getElementById("p637").checked ? 1 : 0);
  formData.append("P638", document.getElementById("p638").checked ? 1 : 0);
  formData.append("P64n", document.getElementById("p64n").checked ? 1 : 0);
  formData.append("P641", document.getElementById("p641").checked ? 1 : 0);
  formData.append("P642", document.getElementById("p642").checked ? 1 : 0);
  formData.append("P643", document.getElementById("p643").checked ? 1 : 0);
  formData.append("P644", document.getElementById("p644").checked ? 1 : 0);
  formData.append("P645", document.getElementById("p645").checked ? 1 : 0);
  formData.append("P646", document.getElementById("p646").checked ? 1 : 0);
  formData.append("P647", document.getElementById("p647").checked ? 1 : 0);
  formData.append("P648", document.getElementById("p648").checked ? 1 : 0);
  formData.append(
    "P65",
    document.querySelector('input[name="p65"]:checked').value
  );
  formData.append("P66n", document.getElementById("p66n").checked ? 1 : 0);
  formData.append("P661", document.getElementById("p661").checked ? 1 : 0);
  formData.append("P662", document.getElementById("p662").checked ? 1 : 0);
  formData.append("P663", document.getElementById("p663").checked ? 1 : 0);
  formData.append("P664", document.getElementById("p664").checked ? 1 : 0);
  formData.append("P665", document.getElementById("p665").checked ? 1 : 0);
  formData.append("P666", document.getElementById("p666").checked ? 1 : 0);
  formData.append("P667", document.getElementById("p667").checked ? 1 : 0);
  formData.append("P668", document.getElementById("p668").checked ? 1 : 0);
  formData.append(
    "P67",
    document.querySelector('input[name="p67"]:checked').value
  );
  formData.append("P68", document.getElementById("p68").value);
  formData.append("P69", document.getElementById("p69").value);
  formData.append("P691", document.getElementById("p691").value);
  formData.append("P70n", document.getElementById("p70n").checked ? 1 : 0);
  formData.append("P701", document.getElementById("p701").checked ? 1 : 0);
  formData.append("P702", document.getElementById("p702").checked ? 1 : 0);
  formData.append("P703", document.getElementById("p703").checked ? 1 : 0);
  formData.append("P704", document.getElementById("p704").checked ? 1 : 0);
  formData.append("P705", document.getElementById("p705").checked ? 1 : 0);
  formData.append("P706", document.getElementById("p706").checked ? 1 : 0);
  formData.append("P707", document.getElementById("p707").checked ? 1 : 0);
  formData.append("P708", document.getElementById("p708").checked ? 1 : 0);
  formData.append("P71", document.getElementById("p71").value);
  formData.append("P72n", document.getElementById("p72n").checked ? 1 : 0);
  formData.append("P721", document.getElementById("p721").checked ? 1 : 0);
  formData.append("P722", document.getElementById("p722").checked ? 1 : 0);
  formData.append("P723", document.getElementById("p723").checked ? 1 : 0);
  formData.append("P724", document.getElementById("p724").checked ? 1 : 0);
  formData.append("P725", document.getElementById("p725").checked ? 1 : 0);
  formData.append("P726", document.getElementById("p726").checked ? 1 : 0);
  formData.append("P727", document.getElementById("p727").checked ? 1 : 0);
  formData.append("P728", document.getElementById("p728").checked ? 1 : 0);
  formData.append("P73n", document.getElementById("p73n").checked ? 1 : 0);
  formData.append("P731", document.getElementById("p731").checked ? 1 : 0);
  formData.append("P732", document.getElementById("p732").checked ? 1 : 0);
  formData.append("P733", document.getElementById("p733").checked ? 1 : 0);
  formData.append("P734", document.getElementById("p734").checked ? 1 : 0);
  formData.append("P735", document.getElementById("p735").checked ? 1 : 0);
  formData.append("P736", document.getElementById("p736").checked ? 1 : 0);
  formData.append("P737", document.getElementById("p737").checked ? 1 : 0);
  formData.append("P738", document.getElementById("p738").checked ? 1 : 0);
  formData.append("P74n", document.getElementById("p74n").checked ? 1 : 0);
  formData.append("P741", document.getElementById("p741").checked ? 1 : 0);
  formData.append("P742", document.getElementById("p742").checked ? 1 : 0);
  formData.append("P743", document.getElementById("p743").checked ? 1 : 0);
  formData.append("P744", document.getElementById("p744").checked ? 1 : 0);
  formData.append("P745", document.getElementById("p745").checked ? 1 : 0);
  formData.append("P746", document.getElementById("p746").checked ? 1 : 0);
  formData.append("P747", document.getElementById("p747").checked ? 1 : 0);
  formData.append("P748", document.getElementById("p748").checked ? 1 : 0);
  formData.append("P75n", document.getElementById("p75n").checked ? 1 : 0);
  formData.append("P751", document.getElementById("p751").checked ? 1 : 0);
  formData.append("P752", document.getElementById("p752").checked ? 1 : 0);
  formData.append("P753", document.getElementById("p753").checked ? 1 : 0);
  formData.append("P754", document.getElementById("p754").checked ? 1 : 0);
  formData.append("P755", document.getElementById("p755").checked ? 1 : 0);
  formData.append("P756", document.getElementById("p756").checked ? 1 : 0);
  formData.append("P757", document.getElementById("p757").checked ? 1 : 0);
  formData.append("P758", document.getElementById("p758").checked ? 1 : 0);
  formData.append("P76n", document.getElementById("p76n").checked ? 1 : 0);
  formData.append("P761", document.getElementById("p761").checked ? 1 : 0);
  formData.append("P762", document.getElementById("p762").checked ? 1 : 0);
  formData.append("P763", document.getElementById("p763").checked ? 1 : 0);
  formData.append("P764", document.getElementById("p764").checked ? 1 : 0);
  formData.append("P765", document.getElementById("p765").checked ? 1 : 0);
  formData.append("P766", document.getElementById("p766").checked ? 1 : 0);
  formData.append("P767", document.getElementById("p767").checked ? 1 : 0);
  formData.append("P768", document.getElementById("p768").checked ? 1 : 0);
  formData.append(
    "P77",
    document.querySelector('input[name="p77"]:checked').value
  );
  formData.append(
    "P78",
    document.querySelector('input[name="p78"]:checked').value
  );
  formData.append(
    "P79",
    document.querySelector('input[name="p79"]:checked').value
  );
  formData.append(
    "P80",
    document.querySelector('input[name="p80"]:checked').value
  );
  formData.append("P81n", document.getElementById("p81n").checked ? 1 : 0);
  formData.append("P811", document.getElementById("p811").checked ? 1 : 0);
  formData.append("P812", document.getElementById("p812").checked ? 1 : 0);
  formData.append("P813", document.getElementById("p813").checked ? 1 : 0);
  formData.append("P814", document.getElementById("p814").checked ? 1 : 0);
  formData.append("P815", document.getElementById("p815").checked ? 1 : 0);
  formData.append("P816", document.getElementById("p816").checked ? 1 : 0);
  formData.append("P817", document.getElementById("p817").checked ? 1 : 0);
  formData.append("P818", document.getElementById("p818").checked ? 1 : 0);
  formData.append("P82n", document.getElementById("p82n").checked ? 1 : 0);
  formData.append("P821", document.getElementById("p821").checked ? 1 : 0);
  formData.append("P822", document.getElementById("p822").checked ? 1 : 0);
  formData.append("P823", document.getElementById("p823").checked ? 1 : 0);
  formData.append("P824", document.getElementById("p824").checked ? 1 : 0);
  formData.append("P825", document.getElementById("p825").checked ? 1 : 0);
  formData.append("P826", document.getElementById("p826").checked ? 1 : 0);
  formData.append("P827", document.getElementById("p827").checked ? 1 : 0);
  formData.append("P828", document.getElementById("p828").checked ? 1 : 0);
  formData.append("P83n", document.getElementById("p83n").checked ? 1 : 0);
  formData.append("P831", document.getElementById("p831").checked ? 1 : 0);
  formData.append("P832", document.getElementById("p832").checked ? 1 : 0);
  formData.append("P833", document.getElementById("p833").checked ? 1 : 0);
  formData.append("P834", document.getElementById("p834").checked ? 1 : 0);
  formData.append("P835", document.getElementById("p835").checked ? 1 : 0);
  formData.append("P836", document.getElementById("p836").checked ? 1 : 0);
  formData.append("P837", document.getElementById("p837").checked ? 1 : 0);
  formData.append("P838", document.getElementById("p838").checked ? 1 : 0);
  formData.append("P84n", document.getElementById("p84n").checked ? 1 : 0);
  formData.append("P841", document.getElementById("p841").checked ? 1 : 0);
  formData.append("P842", document.getElementById("p842").checked ? 1 : 0);
  formData.append("P843", document.getElementById("p843").checked ? 1 : 0);
  formData.append("P844", document.getElementById("p844").checked ? 1 : 0);
  formData.append("P845", document.getElementById("p845").checked ? 1 : 0);
  formData.append("P846", document.getElementById("p846").checked ? 1 : 0);
  formData.append("P847", document.getElementById("p847").checked ? 1 : 0);
  formData.append("P848", document.getElementById("p848").checked ? 1 : 0);
  formData.append(
    "P85",
    document.querySelector('input[name="p85"]:checked').value
  );
  formData.append("P86n", document.getElementById("p86n").checked ? 1 : 0);
  formData.append("P861", document.getElementById("p861").checked ? 1 : 0);
  formData.append("P862", document.getElementById("p862").checked ? 1 : 0);
  formData.append("P863", document.getElementById("p863").checked ? 1 : 0);
  formData.append("P864", document.getElementById("p864").checked ? 1 : 0);
  formData.append("P865", document.getElementById("p865").checked ? 1 : 0);
  formData.append("P866", document.getElementById("p866").checked ? 1 : 0);
  formData.append("P867", document.getElementById("p867").checked ? 1 : 0);
  formData.append("P868", document.getElementById("p868").checked ? 1 : 0);
  formData.append(
    "P87",
    document.querySelector('input[name="p87"]:checked').value
  );

  fetch(`controllers/GuardarUsuarioController.php`, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
    })
    .then(() => {
      mensaje_guardar();
      listar();
      limpiar();
      mostrar_Listar();
      ocultar_Actualizar();
      listar_all();
    });}else{
      
    }
}

function eliminar_usuario(id) {
  if (window.confirm("¿Quiere eliminar este usuario?")) {
    fetch(`controllers/EliminarUsuarioController.php?id=${id}`)
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        alert(data);
      })
      .then(() => {
        listar();
        listar_all();
      });
  }
}

function limpiar() {
  document.getElementById("id").value = '';
document.getElementById("id_encuesta").value = '';
document.getElementById("p1").value = '';
document.getElementById("p2").value = '';
document.getElementById("p4").value = '';
document.getElementById("p5").value = '';
document.getElementById("ptelf").value = '';
document.getElementById("p6").value = '';
document.getElementById("p6d").value = '';
document.getElementById("p7").value = '';
document.getElementById("p8").value = '';
document.getElementById("p9").value = '';
document.getElementById("p10").value = '';
document.getElementById("p11").value = '';
document.getElementById("p12").value = '';
document.getElementById("p13n").checked  = true;
document.getElementById("p13s").checked  = false;
document.getElementById("p14n").checked  = true;
document.getElementById("p14s").checked  = false;
document.getElementById("p15n").checked  = true;
document.getElementById("p15s").checked  = false;
document.getElementById("p16n").checked  = true;
document.getElementById("p16s").checked  = false;
document.getElementById("p17n").checked  = true;
document.getElementById("p17s").checked  = false;
document.getElementById("p18n").checked  = true;
document.getElementById("p18s").checked  = false;
document.getElementById("p19n").checked  = true;
document.getElementById("p19s").checked  = false;
document.getElementById("p20n").checked  = true;
document.getElementById("p20s").checked  = false;
document.getElementById("p21s").checked  = false;
document.getElementById("p21n").checked  = true;
document.getElementById("p22s").checked  = false;
document.getElementById("p22n").checked  = true;
document.getElementById("p23n").checked  = true;
document.getElementById("p23s").checked  = false;
document.getElementById("p24n").checked  = true;
document.getElementById("p24s").checked  = false;
document.getElementById("p25s").checked  = false;
document.getElementById("p25n").checked  = true;
document.getElementById("p26s").checked  = false;
document.getElementById("p26n").checked  = true;
document.getElementById("p27n").checked  = true;
document.getElementById("p27s").checked  = false;
document.getElementById("p28n").checked  = true;
document.getElementById("p28s").checked  = false;
document.getElementById("p29i").checked  = false;
document.getElementById("p29s").checked  = false;
document.getElementById("p29n").checked  = true;
document.getElementById("p30i").checked  = false;
document.getElementById("p30s").checked  = false;
document.getElementById("p30n").checked  = true;
document.getElementById("p31").value = '';
document.getElementById("p32").value = '';
document.getElementById("p33i").checked  = false;
document.getElementById("p33s").checked  = false;
document.getElementById("p33n").checked  = true;
document.getElementById("p34").value = '';
document.getElementById("p35i").checked  = false;
document.getElementById("p35s").checked  = false;
document.getElementById("p35n").checked  = true;
document.getElementById("p36i").checked  = false;
document.getElementById("p36s").checked  = false;
document.getElementById("p36n").checked  = true;
document.getElementById("p37i").checked  = false;
document.getElementById("p37s").checked  = false;
document.getElementById("p37n").checked  = true;
document.getElementById("p38").value = '';
document.getElementById("p391x").checked  = false;
document.getElementById("p392g").checked  = false;
document.getElementById("p393m").checked  = false;
document.getElementById("p394b").checked  = false;
document.getElementById("p395o").checked  = false;
document.getElementById("p39d").value = '';
document.getElementById("p41").value = '';
document.getElementById("p41d").value = '';
document.getElementById("p42").value = '';
document.getElementById("p42d").value = '';
document.getElementById("p43i").checked  = false;
document.getElementById("p43s").checked  = false;
document.getElementById("p43n").checked  = true;
document.getElementById("p44i").checked  = false;
document.getElementById("p44s").checked  = false;
document.getElementById("p44n").checked  = true;
document.getElementById("p45i").checked  = false;
document.getElementById("p45s").checked  = false;
document.getElementById("p45n").checked  = true;
document.getElementById("p45d").value = '';
document.getElementById("p46i").checked  = false;
document.getElementById("p46s").checked  = false;
document.getElementById("p46n").checked  = true;
document.getElementById("p47").value = '';
document.getElementById("p48").value = '';
document.getElementById("p50n").checked  = false;
document.getElementById("p501").checked  = false;
document.getElementById("p502").checked  = false;
document.getElementById("p503").checked  = false;
document.getElementById("p504").checked  = false;
document.getElementById("p505").checked  = false;
document.getElementById("p506").checked  = false;
document.getElementById("p507").checked  = false;
document.getElementById("p508").checked  = false;
document.getElementById("p51").value = '';
document.getElementById("p52n").checked  = false;
document.getElementById("p521").checked  = false;
document.getElementById("p522").checked  = false;
document.getElementById("p523").checked  = false;
document.getElementById("p524").checked  = false;
document.getElementById("p525").checked  = false;
document.getElementById("p526").checked  = false;
document.getElementById("p527").checked  = false;
document.getElementById("p528").checked  = false;
document.getElementById("p53n").checked  = false;
document.getElementById("p531").checked  = false;
document.getElementById("p532").checked  = false;
document.getElementById("p533").checked  = false;
document.getElementById("p534").checked  = false;
document.getElementById("p535").checked  = false;
document.getElementById("p536").checked  = false;
document.getElementById("p537").checked  = false;
document.getElementById("p538").checked  = false;
document.getElementById("p54n").checked  = false;
document.getElementById("p541").checked  = false;
document.getElementById("p542").checked  = false;
document.getElementById("p543").checked  = false;
document.getElementById("p544").checked  = false;
document.getElementById("p545").checked  = false;
document.getElementById("p546").checked  = false;
document.getElementById("p547").checked  = false;
document.getElementById("p548").checked  = false;
document.getElementById("p55n").checked  = false;
document.getElementById("p551").checked  = false;
document.getElementById("p552").checked  = false;
document.getElementById("p553").checked  = false;
document.getElementById("p554").checked  = false;
document.getElementById("p555").checked  = false;
document.getElementById("p556").checked  = false;
document.getElementById("p557").checked  = false;
document.getElementById("p558").checked  = false;
document.getElementById("p56n").checked  = false;
document.getElementById("p561").checked  = false;
document.getElementById("p562").checked  = false;
document.getElementById("p563").checked  = false;
document.getElementById("p564").checked  = false;
document.getElementById("p565").checked  = false;
document.getElementById("p566").checked  = false;
document.getElementById("p567").checked  = false;
document.getElementById("p568").checked  = false;
document.getElementById("p57n").checked  = true;
document.getElementById("p57s").checked  = false;
document.getElementById("p58n").checked  = true;
document.getElementById("p58s").checked  = false;
document.getElementById("p59n").checked  = true;
document.getElementById("p59s").checked  = false;
document.getElementById("p60n").checked  = true;
document.getElementById("p60s").checked  = false;
document.getElementById("p61n").checked  = false;
document.getElementById("p611").checked  = false;
document.getElementById("p612").checked  = false;
document.getElementById("p613").checked  = false;
document.getElementById("p614").checked  = false;
document.getElementById("p615").checked  = false;
document.getElementById("p616").checked  = false;
document.getElementById("p617").checked  = false;
document.getElementById("p618").checked  = false;
document.getElementById("p62n").checked  = false;
document.getElementById("p621").checked  = false;
document.getElementById("p622").checked  = false;
document.getElementById("p623").checked  = false;
document.getElementById("p624").checked  = false;
document.getElementById("p625").checked  = false;
document.getElementById("p626").checked  = false;
document.getElementById("p627").checked  = false;
document.getElementById("p628").checked  = false;
document.getElementById("p63n").checked  = false;
document.getElementById("p631").checked  = false;
document.getElementById("p632").checked  = false;
document.getElementById("p633").checked  = false;
document.getElementById("p634").checked  = false;
document.getElementById("p635").checked  = false;
document.getElementById("p636").checked  = false;
document.getElementById("p637").checked  = false;
document.getElementById("p638").checked  = false;
document.getElementById("p64n").checked  = false;
document.getElementById("p641").checked  = false;
document.getElementById("p642").checked  = false;
document.getElementById("p643").checked  = false;
document.getElementById("p644").checked  = false;
document.getElementById("p645").checked  = false;
document.getElementById("p646").checked  = false;
document.getElementById("p647").checked  = false;
document.getElementById("p648").checked  = false;
document.getElementById("p65s").checked  = false;
document.getElementById("p65n").checked  = true;
document.getElementById("p66n").checked  = false;
document.getElementById("p661").checked  = false;
document.getElementById("p662").checked  = false;
document.getElementById("p663").checked  = false;
document.getElementById("p664").checked  = false;
document.getElementById("p665").checked  = false;
document.getElementById("p666").checked  = false;
document.getElementById("p667").checked  = false;
document.getElementById("p668").checked  = false;
document.getElementById("p67s").checked  = false;
document.getElementById("p67n").checked  = true;
document.getElementById("p68").value = '';
document.getElementById("p69").value = '';
document.getElementById("p691").value = '';
document.getElementById("p70n").checked  = false;
document.getElementById("p701").checked  = false;
document.getElementById("p702").checked  = false;
document.getElementById("p703").checked  = false;
document.getElementById("p704").checked  = false;
document.getElementById("p705").checked  = false;
document.getElementById("p706").checked  = false;
document.getElementById("p707").checked  = false;
document.getElementById("p708").checked  = false;
document.getElementById("p71").value = '';
document.getElementById("p72n").checked  = false;
document.getElementById("p721").checked  = false;
document.getElementById("p722").checked  = false;
document.getElementById("p723").checked  = false;
document.getElementById("p724").checked  = false;
document.getElementById("p725").checked  = false;
document.getElementById("p726").checked  = false;
document.getElementById("p727").checked  = false;
document.getElementById("p728").checked  = false;
document.getElementById("p73n").checked  = false;
document.getElementById("p731").checked  = false;
document.getElementById("p732").checked  = false;
document.getElementById("p733").checked  = false;
document.getElementById("p734").checked  = false;
document.getElementById("p735").checked  = false;
document.getElementById("p736").checked  = false;
document.getElementById("p737").checked  = false;
document.getElementById("p738").checked  = false;
document.getElementById("p74n").checked  = false;
document.getElementById("p741").checked  = false;
document.getElementById("p742").checked  = false;
document.getElementById("p743").checked  = false;
document.getElementById("p744").checked  = false;
document.getElementById("p745").checked  = false;
document.getElementById("p746").checked  = false;
document.getElementById("p747").checked  = false;
document.getElementById("p748").checked  = false;
document.getElementById("p75n").checked  = false;
document.getElementById("p751").checked  = false;
document.getElementById("p752").checked  = false;
document.getElementById("p753").checked  = false;
document.getElementById("p754").checked  = false;
document.getElementById("p755").checked  = false;
document.getElementById("p756").checked  = false;
document.getElementById("p757").checked  = false;
document.getElementById("p758").checked  = false;
document.getElementById("p76n").checked  = false;
document.getElementById("p761").checked  = false;
document.getElementById("p762").checked  = false;
document.getElementById("p763").checked  = false;
document.getElementById("p764").checked  = false;
document.getElementById("p765").checked  = false;
document.getElementById("p766").checked  = false;
document.getElementById("p767").checked  = false;
document.getElementById("p768").checked  = false;
document.getElementById("p77n").checked  = true;
document.getElementById("p77s").checked  = false;
document.getElementById("p78n").checked  = true;
document.getElementById("p78s").checked  = false;
document.getElementById("p79n").checked  = true;
document.getElementById("p79s").checked  = false;
document.getElementById("p80n").checked  = true;
document.getElementById("p80s").checked  = false;
document.getElementById("p81n").checked  = false;
document.getElementById("p811").checked  = false;
document.getElementById("p812").checked  = false;
document.getElementById("p813").checked  = false;
document.getElementById("p814").checked  = false;
document.getElementById("p815").checked  = false;
document.getElementById("p816").checked  = false;
document.getElementById("p817").checked  = false;
document.getElementById("p818").checked  = false;
document.getElementById("p82n").checked  = false;
document.getElementById("p821").checked  = false;
document.getElementById("p822").checked  = false;
document.getElementById("p823").checked  = false;
document.getElementById("p824").checked  = false;
document.getElementById("p825").checked  = false;
document.getElementById("p826").checked  = false;
document.getElementById("p827").checked  = false;
document.getElementById("p828").checked  = false;
document.getElementById("p83n").checked  = false;
document.getElementById("p831").checked  = false;
document.getElementById("p832").checked  = false;
document.getElementById("p833").checked  = false;
document.getElementById("p834").checked  = false;
document.getElementById("p835").checked  = false;
document.getElementById("p836").checked  = false;
document.getElementById("p837").checked  = false;
document.getElementById("p838").checked  = false;
document.getElementById("p84n").checked  = false;
document.getElementById("p841").checked  = false;
document.getElementById("p842").checked  = false;
document.getElementById("p843").checked  = false;
document.getElementById("p844").checked  = false;
document.getElementById("p845").checked  = false;
document.getElementById("p846").checked  = false;
document.getElementById("p847").checked  = false;
document.getElementById("p848").checked  = false;
document.getElementById("p85s").checked  = false;
document.getElementById("p85n").checked  = true;
document.getElementById("p86n").checked  = false;
document.getElementById("p861").checked  = false;
document.getElementById("p862").checked  = false;
document.getElementById("p863").checked  = false;
document.getElementById("p864").checked  = false;
document.getElementById("p865").checked  = false;
document.getElementById("p866").checked  = false;
document.getElementById("p867").checked  = false;
document.getElementById("p868").checked  = false;
document.getElementById("p87s").checked  = false;
document.getElementById("p87n").checked  = true;
  /*document.getElementById("check_habilitado").checked = true;*/
}

function mostrar_Actualizar() {
  document.getElementById("formAct").style.display = "block";
}
function ocultar_Actualizar() {
  document.getElementById("formAct").style.display = "none";
}

function ocultar_Listar() {
  document.getElementById("list").style.display = "none";
}

function mostrar_Listar() {
  document.getElementById("list").style.display = "block";
}

const $btnExportar = document.querySelector("#btnExportar"),
  $tabla = document.querySelector("#tabla_all");

$btnExportar.addEventListener("click", function () {
  let tableExport = new TableExport($tabla, {
    exportButtons: false, // No queremos botones
    filename: "Reporte de cuestionario", //Nombre del archivo de Excel
    sheetname: "Reporte de cuestionario", //Título de la hoja
  });
  let datos = tableExport.getExportData();
  let preferenciasDocumento = datos.tabla_all.xlsx;
  tableExport.export2file(
    preferenciasDocumento.data,
    preferenciasDocumento.mimeType,
    preferenciasDocumento.filename,
    preferenciasDocumento.fileExtension,
    preferenciasDocumento.merges,
    preferenciasDocumento.RTL,
    preferenciasDocumento.sheetname
  );
});

function mensaje_guardar(){
  Swal.fire(
    'Buen trabajo!',
    'Se guardo el cuestionario',
    'success'
)
}