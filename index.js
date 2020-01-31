const pasien = require('./nikPasien')
const dokter = require('./nipDokter')
for(let i=0; i<500; i++){
    const date = Math.floor(Math.random() *29)+1
    const month = Math.floor(Math.random() * 13)+1
    const year = Math.floor(Math.random()*3)+2017
    const ddmmyy = date+'-'+month+'-'+year
    const id_berobat = 1500+i;
    const noKtp = pasien(i);
    const nipDokter = dokter(i);
    const keteranganOptions = ['sakit ringan','sakit berat', 'rawat inap']
    const keterangan = keteranganOptions[Math.floor(Math.random()*keteranganOptions.length)]
    const sql = `insert into Berobat (id_berobat,no_ktp,nip,tanggal,keterangan) values (${id_berobat},'${noKtp}','${nipDokter}','${ddmmyy}','${keterangan}');`
    console.log(sql);
}