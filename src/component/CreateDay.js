import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";

export default function CreateDay(){
    const [lastDay, setLastDay] = useState(null);
    const days = useFetch("http://localhost:3001/days");
    const history = useHistory();
    useEffect(() => {
        if (days.length > 0) {
            setLastDay(days[days.length - 1]);
        }
    }, [days]);
    // const lastDayId = days[days.length - 1].id;
    function addDay(){
        fetch(`http://localhost:3001/days/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                day : days.length + 1
            })
        })
            .then(res => {
                if(res.ok){
                    alert("생성이 완료 되었습니다!");
                    history.push(`/`);
                }
            })
    }
    function delDay(){
        if(window.confirm('삭제 하시겠습니까?')){
        fetch(`http://localhost:3001/days/${lastDay.id}`, {
            method: "DELETE",
        })
            .then(res => {
                if(res.ok){
                    alert("삭제가 완료 되었습니다!");
                    history.push(`/`);
                }
            })
    }
}

    return (
         <div>
            <h3>현재 일수 : {days.length}일</h3>
            <button onClick={addDay}>Day 추가</button>
            <button onClick={delDay} className="btn_del" >Day 삭제</button>
         </div>
        );
}