-- 사원테이블(사원번호, 사원명,, 연락처, 이메일, 입사일자, 급여) -저장용
CREATE TABLE emp(
    emp_no NUMBER PRIMARY KEY, -- emp_seq.nextval
    emp_name VARCHAR2(40) NOT NULL,
    emp_phone VARCHAR2(15) NOT NULL,
    email VARCHAR2(30) NOT NULL,
    hire_date DATE DEFAULT sysdate,
    salary NUMBER
);

-- C(reate)R(ead)U(date)D(elete)
CREATE SEQUENCE emp_seq;

INSERT INTO emp(emp_no, emp_name, emp_phone, email, salary)
VALUES(emp_seq.NEXTVAL, 'kildongHong', '01-1234-5678', 'kildong@email', 2000);

INSERT INTO emp(emp_no, emp_name, emp_phone, email, salary)
VALUES(emp_seq.NEXTVAL, 'kildongPark', '01-3333-5678', 'pkildong@email', 2300);

SELECT *
FROM emp;

UPDATE emp
SET salary = salary + 500,
      emp_phone = '01-1111-1111'
WHERE emp_name = 'kildongHong';

DELETE FROM emp
WHERE emp_no = 2;

CREATE TABLE member(
    member_no NUMBER PRIMARY KEY,
    member_name VARCHAR(20) NOT NULL,
    member_phone VARCHAR(20) NOT NULL,
    member_birth VARCHAR(20) NOT NULL,
    member_gender VARCHAR(5) NOT NULL);
    
CREATE SEQUENCE member_seq;

ALTER TABLE member add dept varchar2(30);

INSERT INTO member(member_no, member_name, member_phone, member_birth, member_gender)
VALUES(member_seq.NEXTVAL, '홍길동', '010-1211-1111', '98-04-02', '남');

INSERT INTO member(member_no, member_name, member_phone, member_birth, member_gender)
VALUES(member_seq.NEXTVAL, '박길동', '010-1211-2222', '99-04-02', '남');

INSERT INTO member(member_no, member_name, member_phone, member_birth, member_gender)
VALUES(member_seq.NEXTVAL, '김민숙', '010-1211-3333', '97-04-02', '여');

SELECT *
FROM member;
