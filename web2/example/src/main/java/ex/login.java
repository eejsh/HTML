package ex;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.catalina.connector.Response;

@WebServlet("/login")
public class login extends HttpServlet {

	private static final long serialVersionUID = 1L;

    public login() {

    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("get 전송");
		String id = request.getParameter("mid").intern();
		String pw = request.getParameter("mpass").intern();
		
		
		if(id!="hong") {
			System.out.println("아이디가 확인 되지 않습니다.");

		}
		else {
			if(pw!="a12345") {
				System.out.println("패스워드가 틀립니다.");
			}else{
				response.sendRedirect("loginok.html");
				
			}
			
		}
	 System.out.println(id);
	 System.out.println(pw);
		
		
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	//	System.out.println("post 전송");
	String id = request.getParameter("mid").intern();
	String pw = request.getParameter("mpass").intern();
	
	response.setCharacterEncoding("UTF-8");
	response.setContentType("text/html;charset=utf-8");
	
	PrintWriter out = response.getWriter(); 	
	
	if(id!="hong") {
	//	System.out.println("아이디가 확인 되지 않습니다.");
		out.println("<script>alert('아이디가 확인 되지 않습니다.'); history.go(-1);</script>");
		
	}
	else {
		if(pw!="a12345") {
	//		System.out.println("패스워드가 틀립니다.");
			out.println("<script>alert('아이디가 확인 되지 않습니다.'); history.go(-1);</script>");
		}else{
			out.println("<script>alert('"+id+"님 환영합니다.'); location.href='./loginok.html'</script>");
			
			//	response.sendRedirect("loginok.html");
			
		}
		
	  }
	 System.out.println(id);
	 System.out.println(pw);
	
	}

}
