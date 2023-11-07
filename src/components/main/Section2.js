import React from 'react'
import '../../style/common.scss'

function Section2() {
// 	const text = document.getElementsByClassName("script_text");
// console.log(text)
// 	// 글자 모음
// 	const letters = [
// 		"프론트엔드",
// 		"퍼블리셔",
// 		"원활한 소통을 하는",
// 	];

// 	// 글자 입력 속도
// 	const speed = 100;
// 	let i = 0;
// 	useEffect(()=>{
// 		// 타이핑 효과
// 		const typing = async () => {  
// 			const letter = letters[i].split("");
			
// 			while (letter.length) {
// 				await wait(speed);
// 				text.innerHTML += letter.shift(); 
// 			}
			
// 			// 잠시 대기
// 			await wait(800);
			
// 			// 지우는 효과
// 			remove();
// 			// if (letters[i + 1]) remove();
// 		}

		
// 		// 글자 지우는 효과
// 		const remove = async () => {
// 			const letter = letters[i].split("");
			
// 			while (letter.length) {
// 				await wait(speed);
				
// 				letter.pop();
// 				text.innerHTML = letter.join(""); 
// 			}
			
// 			// 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
// 			i = !letters[i+1] ? 0 : i + 1;
// 			typing();
// 		}
	
		
// 		// 딜레이 기능 ( 마이크로초 )
// 		function wait(ms) {
// 			return new Promise(res => setTimeout(res, ms))
// 		}
		
// 		// 초기 실행
// 		setTimeout(typing, 1500);
// 	},[])
	
	

	return (
		<>
			<div className='title'>
				<h2>ABOUT</h2>
			</div>
			<div className='cont_wrap inner_c'>
				<div className='img_wrap'>
					<img src='' alt='' />
				</div>
				<div className='text_wrap'>
					<div className='sub_title'>
						<p>저는 <span className='script_text'>프론트엔드 </span></p>
						<p>개발자 홍민경입니다.</p>
					</div>
					<div className='introduce'>
						<p>대충 개발에 대한 내 생각 내 태도 등 을 간략하게 작성하고 그거를 위해 어떤 노력을 해왔다아를 써야한단다 를 노력해 왔다 </p>
						<p>어떤 것을 중시하고 잘하는것을 잘 활용하여 어떠한 개발자가 되려고 한다. 어떤 프론트엔드 개발자가 되고자 한다. 혼자 하는 것이 아닌 같이 협업해서 작업할 수 있는 프론트엔드 개발자가 되고자 합니다.</p>
					</div>
					<div className='skill_wrap'>
						
					</div>
				</div>
			</div>
		</>
	)
}

export default Section2