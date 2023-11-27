import styled from 'styled-components';
import Menus from './Menus';
import { InputText } from '../commons/InputStyle';

const FormBox = styled.form`
  h1 {
    font-size: 30px;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 35px;
    line-height: 1;
    padding: 0;
  }

  h2 {
    font-size: 18px;
    font-weight: bold;
    margin: 25px 0 10px;
    line-height: 1;
  }
  input[type='text'],
  input[type='number'],
  input[type='password'],
  input[type='email'],
  input[type='date'] {
    border: 1px solid #d5d5d5;
    width: 100%;
    height: 45px;
    padding: 0 10px;
    border-radius: 3px;
  }

  input[type='radio'] {
    display: none;
  }

  .btns {
    display: flex;
    width: 400px;
    margin: 0 auto;
  }
  .btns > button {
    width: 0;
    flex-grow: 1;
    height: 50px;
    font-size: 18px;
    border: 1px solid #000;
  }
  .btns > button:last-of-type {
    background: #000;
    color: #fff;
    margin-left: 10px;
  }

  input[type='radio'] + label {
    min-height: 24px;
    line-height: 1;
    padding: 3px 0 3px 25px;
  }

  .table-cols {
    width: 100%;
    border-spacing: 0;
    padding: 0;
    border-top: 3px solid #222;
    margin-bottom: 20px;
  }
  .table-cols th {
    background: #f8f8f8;
    width: 160px;
    padding: 10px 20px;
    text-align: left;
  }
  .table-cols td {
    background: #fff;
    padding: 10px 15px;
  }
  .table-cols th,
  .table-cols td {
    border-bottom: 1px solid #d5d5d5;
  }
  textarea {
    border: 1px solid #d5d5d5;
    width: 100%;
    min-height: 150px;
    padding: 10px;
    resize: none;
  }

  div .search_btn {
    text-align: center;
    margin: 20px 0 35px;
  }
`;
const BoardForm = ({
  formData,
  onChange,
  handleClick,
  handleInputChange,
  handleSubmit,
  handleNumericChange,
  handleCheckboxChange,
}) => {
  return (
    <section>
      <Menus />

      <FormBox onSubmit={handleSubmit}>
        <h1>게시판 등록</h1>
        <h2>일반설정</h2>
        <table className="table-cols">
          <tbody>
            <tr>
              <th>게시판 ID</th>
              <td>
                <InputText
                  type="text"
                  name="bId"
                  Value={formData?.bId}
                  onChange={onChange}
                />
              </td>
            </tr>
            <tr>
              <th>게시판명</th>
              <td>
                <InputText
                  type="text"
                  name="bName"
                  value={formData?.bName}
                  onChange={onChange}
                />
              </td>
            </tr>
            <tr>
              <th>사용여부</th>
              <td>
                <input
                  type="radio"
                  name="use"
                  value={formData?.use}
                  id="use_true"
                  checked={formData?.use === 'true'}
                  onChange={handleClick}
                />
                <label htmlFor="use_true">사용</label>
                <input
                  type="radio"
                  name="use"
                  value="false"
                  id="use_false"
                  checked={formData?.use === 'false'}
                  onChange={handleClick}
                />
                <label htmlFor="use_false">미사용</label>
              </td>
            </tr>
            <tr>
              <th>1페이지 게시글 수</th>
              <td>
                <input
                  type="number"
                  name="rowsOfPage"
                  id="rowsOfPage"
                  value={formData?.rowsOfPage || ''}
                  onChange={handleNumericChange}
                />
              </td>
            </tr>
            <tr>
              <th>게시글 하단 목록</th>
              <td>
                <input
                  type="radio"
                  name="showViewList"
                  value={formData?.showViewList}
                  id="showViewList_true"
                  checked={formData?.showViewList === 'true'}
                  onChange={handleClick}
                />
                <label htmlFor="showViewList_true">사용</label>

                <input
                  type="radio"
                  name="showViewList"
                  value={formData?.showViewList}
                  id="showViewList_false"
                  checked={formData?.showViewList === 'false'}
                  onChange={handleClick}
                />
                <label htmlFor="showViewList_false">미사용</label>
              </td>
            </tr>
          </tbody>
        </table>

        <h2>분류 설정</h2>
        <table className="table-cols">
          <tbody>
            <tr>
              <th>분류</th>
              <td>
                <textarea
                  name="category"
                  value={formData?.category}
                  placeholder="분류가 여러개인 경우 엔터키를 눌러 줄개행하여 입력하세요..."
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>

        <h2>권한 설정</h2>
        <table className="table-cols">
          <tbody>
            <tr>
              <th>목록</th>
              <td>
                <input
                  type="radio"
                  name="listAccessRole"
                  value={formData?.listAccessRole}
                  id="listAccessRole_ALL"
                  checked={formData?.listAccessRole === 'ALL'}
                  onChange={handleClick}
                />
                <label htmlFor="listAccessRole_ALL">
                  전체(비회원+회원+관리자)
                </label>

                <input
                  type="radio"
                  name="listAccessRole"
                  value={formData?.listAccessRole}
                  id="listAccessRole_USER"
                  checked={formData?.listAccessRole === 'USER'}
                  onChange={handleClick}
                />
                <label htmlFor="listAccessRole_USER">회원</label>

                <input
                  type="radio"
                  name="listAccessRole"
                  value="ADMIN"
                  id="listAccessRole_ADMIN"
                  checked={formData?.listAccessRole === 'ADMIN'}
                  onChange={handleClick}
                />
                <label htmlFor="listAccessRole_ADMIN">관리자</label>
              </td>
            </tr>
            <tr>
              <th>글보기</th>
              <td>
                <input
                  type="radio"
                  name="viewAccessRole"
                  value="ALL"
                  id="viewAccessRole_ALL"
                  checked={formData?.viewAccessRole === 'ALL'}
                  onChange={handleClick}
                />
                <label htmlFor="viewAccessRole_ALL">
                  전체(비회원+회원+관리자)
                </label>

                <input
                  type="radio"
                  name="viewAccessRole"
                  value="USER"
                  id="viewAccessRole_USER"
                  checked={formData?.viewAccessRole === 'USER'}
                  onChange={handleClick}
                />
                <label htmlFor="viewAccessRole_USER">회원</label>

                <input
                  type="radio"
                  name="viewAccessRole"
                  value="ADMIN"
                  id="viewAccessRole_ADMIN"
                  checked={formData?.viewAccessRole === 'ADMIN'}
                  onChange={handleClick}
                />
                <label htmlFor="viewAccessRole_ADMIN">관리자</label>
              </td>
            </tr>
            <tr>
              <th>글쓰기</th>
              <td>
                <input
                  type="radio"
                  name="writeAccessRole"
                  value="ALL"
                  id="writeAccessRole_ALL"
                  checked={formData?.writeAccessRole === 'ALL'}
                  onChange={handleClick}
                />
                <label htmlFor="writeAccessRole_ALL">
                  전체(비회원+회원+관리자)
                </label>

                <input
                  type="radio"
                  name="writeAccessRole"
                  value="USER"
                  id="writeAccessRole_USER"
                  checked={formData?.writeAccessRole === 'USER'}
                  onChange={handleClick}
                />
                <label htmlFor="writeAccessRole_USER">회원</label>

                <input
                  type="radio"
                  name="writeAccessRole"
                  value="ADMIN"
                  id="writeAccessRole_ADMIN"
                  checked={formData?.writeAccessRole === 'ADMIN'}
                  onChange={handleClick}
                />
                <label htmlFor="writeAccessRole_ADMIN">관리자</label>
              </td>
            </tr>
            <tr>
              <th>답글</th>
              <td>
                <input
                  type="radio"
                  name="replyAccessRole"
                  value="ALL"
                  id="replyAccessRole_ALL"
                  checked={formData?.replyAccessRole === 'ALL'}
                  onChange={handleClick}
                />
                <label htmlFor="replyAccessRole_ALL">
                  전체(비회원+회원+관리자)
                </label>

                <input
                  type="radio"
                  name="replyAccessRole"
                  value="USER"
                  id="replyAccessRole_USER"
                  checked={formData?.replyAccessRole === 'USER'}
                  onChange={handleClick}
                />
                <label htmlFor="replyAccessRole_USER">회원</label>
                <input
                  type="radio"
                  name="replyAccessRole"
                  value="ADMIN"
                  id="replyAccessRole_ADMIN"
                  checked={formData?.replyAccessRole === 'ADMIN'}
                  onChange={handleClick}
                />
                <label htmlFor="replyAccessRole_ADMIN">관리자</label>
              </td>
            </tr>
            <tr>
              <th>댓글</th>
              <td>
                <input
                  type="radio"
                  name="commentAccessRole"
                  value="ALL"
                  id="commentAccessRole_ALL"
                  checked={formData?.commentAccessRole === 'ALL'}
                  onChange={handleClick}
                />
                <label htmlFor="commentAccessRole_ALL">
                  전체(비회원+회원+관리자)
                </label>

                <input
                  type="radio"
                  name="commentAccessRole"
                  value="USER"
                  id="commentAccessRole_USER"
                  checked={formData?.commentAccessRole === 'USER'}
                  onChange={handleClick}
                />
                <label htmlFor="commentAccessRole_USER">회원</label>

                <input
                  type="radio"
                  name="commentAccessRole"
                  value="ADMIN"
                  id="commentAccessRole_ADMIN"
                  checked={formData?.commentAccessRole === 'ADMIN'}
                  onChange={handleClick}
                />
                <label htmlFor="commentAccessRole_ADMIN">관리자</label>
              </td>
            </tr>
          </tbody>
        </table>
        <h2>기능 설정</h2>
        <table className="table-cols">
          <tbody>
            <tr>
              <th>에디터</th>
              <td>
                <input
                  type="radio"
                  name="useEditor"
                  value="true"
                  id="useEditor_true"
                  defaultChecked={formData?.useEditor === 'true'}
                />
                <label htmlFor="useEditor_true">사용</label>

                <input
                  type="radio"
                  name="useEditor"
                  value="false"
                  id="useEditor_false"
                  checked={formData?.useEditor === 'false'}
                />
                <label htmlFor="useEditor_false">미사용</label>
              </td>
            </tr>
            <tr>
              <th>파일첨부</th>
              <td>
                <input
                  type="radio"
                  name="useAttachFile"
                  value="true"
                  id="useAttachFile_true"
                  checked={formData?.useAttachFile === 'true'}
                  onChange={handleInputChange}
                />
                <label htmlFor="useAttachFile_true">사용</label>

                <input
                  type="radio"
                  name="useAttachFile"
                  value="false"
                  id="useAttachFile_false"
                  checked={formData?.useAttachFile === 'false'}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="useAttachFile_false">미사용</label>
              </td>
            </tr>
            <tr>
              <th>이미지첨부</th>
              <td>
                <input
                  type="radio"
                  name="useAttachImage"
                  value="true"
                  id="useAttachImage_true"
                  checked={formData?.useAttachImage === 'true'}
                  onChange={handleClick}
                />

                <label htmlFor="useAttachImage_true">사용</label>
                <input
                  type="radio"
                  name="useAttachImage"
                  value="false"
                  id="useAttachImage_false"
                  checked={formData?.useAttachImage === 'false'}
                  onChange={handleClick}
                />
                <label htmlFor="useAttachImage_false">미사용</label>
              </td>
            </tr>
            <tr>
              <th>글작성 후 이동</th>
              <td>
                <input
                  type="radio"
                  name="locationAfterWriting"
                  value="view"
                  id="locationAfterWriting_view"
                  checked={formData?.locationAfterWriting === 'view'}
                  onChange={handleClick}
                />
                <label htmlFor="locationAfterWriting_view">게시글</label>

                <input
                  type="radio"
                  name="locationAfterWriting"
                  value="list"
                  id="locationAfterWriting_list"
                  checked={formData?.locationAfterWriting === 'list'}
                  onChange={handleClick}
                />
                <label htmlFor="locationAfterWriting_list">목록</label>
              </td>
            </tr>
            <tr>
              <th>답글사용</th>
              <td>
                <input
                  type="radio"
                  name="useReply"
                  value="true"
                  id="useReply_true"
                />
                <label htmlFor="useReply_true">사용</label>

                <input
                  type="radio"
                  name="useReply"
                  value="false"
                  id="useReply_false"
                  checked="checked"
                />
                <label htmlFor="useReply_false">미사용</label>
              </td>
            </tr>
            <tr>
              <th>댓글사용</th>
              <td>
                <input
                  type="radio"
                  name="useReply"
                  value="true"
                  id="useReply_true"
                  checked={formData?.useReply === 'true'}
                  onChange={handleClick}
                />
                <label htmlFor="useComment_true">사용</label>

                <input
                  type="radio"
                  name="useReply"
                  value="false"
                  id="useReply_false"
                  checked={formData?.useReply === 'false'}
                  onChange={handleClick}
                />
                <label htmlFor="useComment_false">미사용</label>
              </td>
            </tr>
            <tr>
              <th>게시판 스킨</th>
              <td>
                <input
                  type="radio"
                  name="skin"
                  value="default"
                  id="skin_default"
                  checked={formData?.skin === 'default'}
                  onChange={handleClick}
                />
                <label htmlFor="skin_default">기본</label>

                <input
                  type="radio"
                  name="skin"
                  value="gallery"
                  id="skin_gallery"
                  checked={formData?.skin === 'gallery'}
                  onChange={handleClick}
                />
                <label htmlFor="skin_gallery">갤러리</label>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="btns">
          <button type="reset">다시작성</button>
          <button type="submit">등록하기</button>
        </div>
      </FormBox>
    </section>
  );
};

export default BoardForm;
