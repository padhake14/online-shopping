package com.example.util;

import java.io.File;
import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.multipart.MultipartFile;

import ch.qos.logback.core.util.FileUtil;

public class FileUploadUtility {
	
	private static final String ABS_PATH = "D:\\eclipse-jee-oxygen-1a-win32-x86_64\\eommarce\\online-shopping\\src\\main\\resources\\static\\images";
	private static String REAL_PATH = "";
	private static final Logger logger = LoggerFactory.getLogger(FileUtil.class);
	public static void uploadFile(HttpServletRequest request, MultipartFile file, String code) {
		//get the real path
		
		REAL_PATH = request.getSession().getServletContext().getRealPath("/resources/images/");
		logger.info(REAL_PATH);	
		
		//check ail the directories are exit
		//please create the directory 
		
		if(!new File(ABS_PATH).exists()) {
			new File(ABS_PATH).mkdirs();
		}
		
		if(!new File(REAL_PATH).exists()) {
			new File(REAL_PATH).mkdirs();
		}
		
		try {
			//transfer the file to both the location
			file.transferTo(new File(REAL_PATH + code + ".jpg"));
			file.transferTo(new File(ABS_PATH + code + ".jpg"));
		}
		catch(IOException ex) {
			ex.printStackTrace();
		}
		
	}
	
	
}
