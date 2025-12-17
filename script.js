// 각 아이템별 레벨-값 매핑 테이블
const levelValueMap = {
    altar: {
        15: 500,
        20: 500,
        24: 800,
        28: 1000,
        30: 1000
    },
    obelisk: {
        10: 500,
        15: 500,
        20: 1000
    },
    warfort: {
        15: 1000,
        20: 1000,
        24: 1500,
        28: 1500,
        30: 2000
    },
    statueofcarnage: {
        15: 1000,
        20: 1000,
        24: 1500,
        28: 1500,
        30: 2000
    },
    statueofguardian: {
        15: 1000,
        20: 1000,
        24: 1500,
        28: 1500,
        30: 2000
    }
};

// 각 아이템별 계산 함수 정의
const calculationFunctions = {
    obelisk: (level) => {
        return levelValueMap.obelisk[level] || 0;
    },
    altar: (level) => {
        return levelValueMap.altar[level] || 0;
    },
    warfort: (level) => {
        return levelValueMap.warfort[level] || 0;
    },
    statueofcarnage: (level) => {
        return levelValueMap.statueofcarnage[level] || 0;
    },
    statueofguardian: (level) => {
        return levelValueMap.statueofguardian[level] || 0;
    }
};

// 결과 계산 함수
function calculateResult() {
    let total = 0;
    
    // Obelisk (1개 입력)
    const obeliskInput = document.getElementById('obelisk-input');
    if (obeliskInput) {
        const level = parseInt(obeliskInput.value) || 0;
        total += calculationFunctions.obelisk(level);
    }
    
    // Altar (5개 입력 - 모두 합산)
    for (let i = 1; i <= 5; i++) {
        const altarInput = document.getElementById(`altar-input-${i}`);
        if (altarInput) {
            const level = parseInt(altarInput.value) || 0;
            total += calculationFunctions.altar(level);
        }
    }
    
    // War Fort (1개 입력)
    const warfortInput = document.getElementById('warfort-input');
    if (warfortInput) {
        const level = parseInt(warfortInput.value) || 0;
        total += calculationFunctions.warfort(level);
    }
    
    // Statue of Carnage (2개 입력 - 모두 합산)
    for (let i = 1; i <= 2; i++) {
        const carnageInput = document.getElementById(`statueofcarnage-input-${i}`);
        if (carnageInput) {
            const level = parseInt(carnageInput.value) || 0;
            total += calculationFunctions.statueofcarnage(level);
        }
    }
    
    // Statue of Guardian (2개 입력 - 모두 합산)
    for (let i = 1; i <= 2; i++) {
        const guardianInput = document.getElementById(`statueofguardian-input-${i}`);
        if (guardianInput) {
            const level = parseInt(guardianInput.value) || 0;
            total += calculationFunctions.statueofguardian(level);
        }
    }
    
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

