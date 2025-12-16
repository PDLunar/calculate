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
    let total = 0;
    
    // Obelisk
    const obeliskInput = document.getElementById('obelisk-input');
    if (obeliskInput) {
        const level = parseInt(obeliskInput.value) || 0;
        total += calculationFunctions.obelisk(level);
    }
    
    // Altar - 5개 입력 필드의 합
    let altarTotal = 0;
    for (let i = 1; i <= 5; i++) {
        const altarInput = document.getElementById(`altar-input-${i}`);
        if (altarInput) {
            const level = parseInt(altarInput.value) || 0;
            altarTotal += level;
        }
    }
    total += calculationFunctions.altar(altarTotal);
    
    // War Fort
    const warfortInput = document.getElementById('warfort-input');
    if (warfortInput) {
        const level = parseInt(warfortInput.value) || 0;
        total += calculationFunctions.warfort(level);
    }
    
    // Statue of Carnage - 2개 입력 필드의 합
    let carnageTotal = 0;
    for (let i = 1; i <= 2; i++) {
        const carnageInput = document.getElementById(`statueofcarnage-input-${i}`);
        if (carnageInput) {
            const level = parseInt(carnageInput.value) || 0;
            carnageTotal += level;
        }
    }
    total += calculationFunctions.statueofcarnage(carnageTotal);
    
    // Statue of Guardian - 2개 입력 필드의 합
    let guardianTotal = 0;
    for (let i = 1; i <= 2; i++) {
        const guardianInput = document.getElementById(`statueofguardian-input-${i}`);
        if (guardianInput) {
            const level = parseInt(guardianInput.value) || 0;
            guardianTotal += level;
        }
    }
    total += calculationFunctions.statueofguardian(guardianTotal);
    
    // 결과 표시
    const resultInput = document.getElementById('result');
    resultInput.value = total.toLocaleString();
}

// 모든 레벨 입력 필드에 이벤트 리스너 추가
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.level-input');
    
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
    
    // 초기 계산
    calculateResult();
});

// 계산 함수를 외부에서 수정할 수 있도록 export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculationFunctions, calculateResult };
}

