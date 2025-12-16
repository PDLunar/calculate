// 각 아이템별 계산 함수 정의
// 필요에 따라 계산 로직을 수정할 수 있습니다

const calculationFunctions = {
    obelisk: (level) => {
        // 예시: 레벨 * 10
        return level * 10;
    },
    altar: (level) => {
        // 예시: 레벨 * 15
        return level * 15;
    },
    warfort: (level) => {
        // 예시: 레벨 * 20
        return level * 20;
    },
    statueofcarnage: (level) => {
        // 예시: 레벨 * 25
        return level * 25;
    },
    statueofguardian: (level) => {
        // 예시: 레벨 * 30
        return level * 30;
    }
};

// 결과 계산 함수
function calculateResult() {
    const inputs = document.querySelectorAll('.level-input');
    let total = 0;
    
    inputs.forEach(input => {
        const item = input.getAttribute('data-item');
        const level = parseInt(input.value) || 0;
        
        if (calculationFunctions[item]) {
            total += calculationFunctions[item](level);
        }
    });
    
    // 결과 표시
    const resultInput = document.getElementById('result');
    resultInput.value = total.toLocaleString();
}

// 모든 레벨 입력 필드에 이벤트 리스너 추가
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.level-input.overlay-input');
    
    inputs.forEach(input => {
        // 입력 시 실시간 계산
        input.addEventListener('input', calculateResult);
        
        // 숫자만 입력 가능하도록 제한
        input.addEventListener('keypress', function(e) {
            if (e.key === 'e' || e.key === 'E' || e.key === '+' || e.key === '-') {
                e.preventDefault();
            }
        });
        
        // 음수 방지
        input.addEventListener('change', function() {
            if (this.value < 0) {
                this.value = 0;
            }
            calculateResult();
        });
    });
    
    // 이미지 로드 후 입력 필드 위치 조정
    const bgImage = document.getElementById('bgImage');
    if (bgImage.complete) {
        adjustInputPositions();
    } else {
        bgImage.addEventListener('load', adjustInputPositions);
    }
    
    // 창 크기 변경 시 위치 재조정
    window.addEventListener('resize', adjustInputPositions);
    
    // 초기 계산
    calculateResult();
});

// 이미지 크기에 맞춰 입력 필드 위치 조정
function adjustInputPositions() {
    const bgImage = document.getElementById('bgImage');
    
    if (!bgImage.complete || bgImage.naturalWidth === 0) {
        return;
    }
    
    // 이미지가 로드되면 입력 필드 크기와 위치를 조정
    // 퍼센트 기반으로 설정되어 있어 자동으로 조정됨
    // 필요시 여기서 추가 미세 조정 가능
}

// 계산 함수를 외부에서 수정할 수 있도록 export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculationFunctions, calculateResult };
}

