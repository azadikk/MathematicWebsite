import './Box3.css';

export default function Box3 () {
    return (
        <div className='Box3'>
            <div className='child-box'>
                <img src='Box3img.png' />
                    <strong>Sınaq imtahanında iştirak et</strong>
                    <span>
                        Əliyar Əliyev - Riyaziyyat sınaqları <br />
                        <br />
                        Daha çox sınaqlara qatılmaq <br />
                        üçün
                    </span>
                    <button className='signup'>Sign up</button>
            </div>

            <img id='kitaplar'src='box3imgg.png' />
            <strong>Niyə MathQuiz?</strong>
            <span>
            <span>Online şəkildə imtahan şansı</span>
            <span>Pulsuz imtahanlara qoşul</span>
            <span>Giriş edərək daha çox sınaq imkanı</span></span>
            <img id='lineBox3'src='box3line.png' />
            <img id='line2Box3' src='box3line.png' />


            <img id='telebelerim' src='telebelerim.png' />
            <span id='telebelerim2'>
                Tələbələrim
            </span>
        </div>
    );
}