import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles';

interface Props {}

const Privacy: React.FC<Props> = () => {
  return (
    <Container>
      <Contents>
        <h4>
          디엔케이드림(&apos;https://paysys.kr&apos; 이하 행사전표시스템)은
          <small>(는)</small> [개인정보보호법] 제30조에 따라 정보주체의
          개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수
          있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
        </h4>
        <h4>○ 이 개인정보처리방침은 2018년 1월 1일부터 적용됩니다.</h4>

        <ul>
          <li>
            <h4>제1조 (개인정보의 처리 목적)</h4>
            <FirstUl>
              <FirstLi>
                &lt;디엔케이드림&gt;(행사전표시스템)은<small>(는)</small> 다음의
                목적을 위하여 개인정보를 처리합니다.
                <br />
                처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지
                않으며, 이용 목적이 변경되는 경우에는 [개인정보 보호법] 제18조에
                따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
              </FirstLi>
              <FirstLi>
                1. 홈페이지 회원가입 및 관리
                <SecondUl>
                  <li>
                    회원제 서비스 제공에 따른 본인 식별·인증 목적으로 개인정보를
                    처리합니다.
                  </li>
                </SecondUl>
              </FirstLi>
            </FirstUl>
          </li>

          <li>
            <h4>제2조 (개인정보의 처리 및 보유 기간)</h4>
            <FirstUl>
              <FirstLi>
                &lt;디엔케이드림&gt;은<small>(는)</small> 법령에 따른 개인정보
                보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은
                개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
              </FirstLi>
              <FirstLi>
                1. 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
                <SecondUl>
                  <li>① 행사전표시스템 홈페이지 회원 관리</li>
                  <li>
                    ② 홈페이지 회원 관리와 관련한 개인정보는 수집·이용에 관한
                    동의일로부터 &lt;지체없이 파기&gt;까지 위 이용목적을 위하여
                    보유·이용됩니다.
                  </li>
                  <li>③ 이용자 동의없이 개인정보를 수집하지 않음</li>
                </SecondUl>
              </FirstLi>
            </FirstUl>
          </li>

          <li>
            <h4>제3조 (정보주체와 법정대리인의 권리·의무 및 그 행사방법)</h4>
            <FirstUl>
              <FirstLi>
                1. 정보주체는 디엔케이드림에 대해 언제든지 개인정보
                열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.
              </FirstLi>
              <FirstLi>
                2. 제1항에 따른 권리 행사는디엔케이드림에 대해 「개인정보
                보호법」 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX)
                등을 통하여 하실 수 있으며 디엔케이드림은<small>(는)</small>{' '}
                이에 대해 지체 없이 조치하겠습니다.
              </FirstLi>
              <FirstLi>
                3. 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을
                받은 자 등 대리인을 통하여 하실 수 있습니다.이 경우 “개인정보
                처리 방법에 관한 고시<small>(제2020-7호)</small>” 별지 제11호
                서식에 따른 위임장을 제출하셔야 합니다.
              </FirstLi>
              <FirstLi>
                4. 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조
                제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수
                있습니다.
              </FirstLi>
              <FirstLi>
                5. 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가
                수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수
                없습니다.
              </FirstLi>
              <FirstLi>
                6. 디엔케이드림은<small>(는)</small> 정보주체 권리에 따른 열람의
                요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한
                자가 본인이거나 정당한 대리인인지를 확인합니다.
              </FirstLi>
            </FirstUl>
          </li>

          <li>
            <h4>제4조 (처리하는 개인정보의 항목 작성)</h4>
            <FirstUl>
              <FirstLi>
                1. &lt;디엔케이드림&gt;은<small>(는)</small> 다음의 개인정보
                항목을 처리하고 있습니다.
                <SecondUl>
                  <li>① 행사전표시스템 회원 관리</li>
                  <li>② 필수항목 : 로그인 ID, 비밀번호</li>
                </SecondUl>
              </FirstLi>
            </FirstUl>
          </li>

          <li>
            <h4>제5조 (개인정보의 파기)</h4>
            <FirstUl>
              <FirstLi>
                1. &lt;디엔케이드림&gt;은<small>(는)</small> 개인정보 보유기간의
                경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는
                지체없이 해당 개인정보를 파기합니다.
              </FirstLi>
              <FirstLi>
                2. 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나
                처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를
                계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의
                데이터베이스<small>(DB)</small>로 옮기거나 보관장소를 달리하여
                보존합니다.
              </FirstLi>
              <FirstLi>
                3. 개인정보 파기 절차 및 방법은 다음과 같습니다.
                <SecondUl>
                  <li>
                    ① &lt;디엔케이드림&gt;은<small>(는)</small> 파기 사유가
                    발생한 개인정보를 선정하고, &lt;디엔케이드림&gt; 의 개인정보
                    보호책임자의 승인을 받아 개인정보를 파기합니다.
                  </li>
                  <li>
                    ② 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적
                    방법을 사용합니다.
                  </li>
                </SecondUl>
              </FirstLi>
            </FirstUl>
          </li>

          <li>
            <h4>
              제6조 (개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항)
            </h4>
            <FirstUl>
              <FirstLi>
                1. 디엔케이드림은<small>(는)</small> 이용자에게 개별적인
                맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는
                ‘쿠키<small>(cookie)</small>’를 사용합니다.
              </FirstLi>
              <FirstLi>
                2. 쿠키는 웹사이트를 운영하는데 이용되는 서버
                <small>(http)</small>가 이용자의 컴퓨터 브라우저에게 보내는
                소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에 저장되기도
                합니다.
                <SecondUl>
                  <li>
                    ① 쿠키의 사용 목적 : 이용자가 방문한 각 서비스와 웹
                    사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속
                    여부, 등을 파악하여 이용자에게 최적화된 정보 제공을 위해
                    사용됩니다.
                  </li>
                  <li>
                    ② 쿠키의 설치·운영 및 거부 : 웹브라우저 상단의
                    도구&gt;인터넷 옵션&gt;개인정보 메뉴의 옵션 설정을 통해 쿠키
                    저장을 거부 할 수 있습니다.
                  </li>
                  <li>
                    ③ 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이
                    발생할 수 있습니다.
                  </li>
                </SecondUl>
              </FirstLi>
            </FirstUl>
          </li>

          <li>
            <h4>제7조 (개인정보 보호책임자)</h4>
            <FirstUl>
              <FirstLi>
                1. 디엔케이드림은<small>(는)</small> 개인정보 처리에 관한 업무를
                총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및
                피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고
                있습니다.
                <SecondUl>
                  <li>▷ 개인정보 보호 책임자</li>
                  <li>성명 : 김현성</li>
                  <li>연락처 : hkkokily5@gmail.com</li>
                </SecondUl>
              </FirstLi>
              <FirstLi>
                2. 정보주체께서는 디엔케이드림 의 서비스
                <small>(또는 사업)</small>을 이용하시면서 발생한 모든 개인정보
                보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보
                보호책임자 및 담당부서로 문의하실 수 있습니다. 디엔케이드림은
                <small>(는)</small> 정보주체의 문의에 대해 지체 없이 답변 및
                처리해드릴 것입니다.
              </FirstLi>
            </FirstUl>
          </li>

          <li>
            <h4>제8조 (개인정보 열람청구)</h4>
            <FirstUl>
              <FirstLi>
                정보주체는 ｢개인정보 보호법｣ 제35조에 따른 개인정보의 열람
                청구를 상기 책임자에게 할 수 있습니다. &lt;디엔케이드림&gt;은
                <small>(는)</small> 정보주체의 개인정보 열람청구가 신속하게
                처리되도록 노력하겠습니다.
              </FirstLi>
            </FirstUl>
          </li>

          <li>
            <h4>제9조 (권익침해 구제방법)</h4>
            <FirstUl>
              <FirstLi>
                1. 정보주체는 개인정보침해로 인한 구제를 받기 위하여
                개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터
                등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타
                개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기
                바랍니다.
                <SecondUl>
                  <li>
                    ① 개인정보분쟁조정위원회 : (국번없이) 1833-6972
                    (www.kopico.go.kr)
                  </li>
                  <li>
                    ② 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)
                  </li>
                  <li>③ 대검찰청 : (국번없이) 1301 (www.spo.go.kr)</li>
                  <li>④ 경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)</li>
                </SecondUl>
              </FirstLi>
              <FirstLi>
                2.「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의
                정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에
                대 하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는
                이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을
                청구할 수 있습니다.
              </FirstLi>
              <FirstLi>
                ※ 행정심판에 대해 자세한 사항은
                중앙행정심판위원회(www.simpan.go.kr) 홈페이지를 참고하시기
                바랍니다.
              </FirstLi>
            </FirstUl>
          </li>

          <li>
            <h4>제10조 (개인정보 처리방침 변경)</h4>
            <FirstUl>
              <FirstLi>
                이 개인정보처리방침은 2022년 1월 1부터 적용됩니다.
              </FirstLi>
            </FirstUl>
          </li>
        </ul>
      </Contents>
    </Container>
  );
};

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  line-height: 1.4;
  ${media.large} {
    max-width: 760px;
  }
  ${media.medium} {
    max-width: 95%;
  }
  ul {
    list-style: none;
    h4 {
      margin-top: 2.5rem;
      margin-bottom: 0.6rem;
    }
  }
`;

const FirstUl = styled.ul`
  margin-left: -20px;
`;

const FirstLi = styled.li`
  line-height: 1.6;
  margin-bottom: 0.4rem;
`;

const SecondUl = styled.ul`
  margin-top: 0.2rem;
  margin-left: -20px;
`;

const ThirdUl = styled.ul`
  margin-left: -25px;

  li {
    margin-top: 0.2rem;
  }
`;

export default Privacy;
