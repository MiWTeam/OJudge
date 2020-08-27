package com.example.ojserver.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.Date;


@Data
public class User {

    @Id
    private Long user_id;

    private String user_name;

    private String user_passwd;

    private Integer user_level;

    private String user_email;

    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "GMT+8")
    private Date user_create_time;
}
