Search.setIndex({docnames:["10min","10min-cudf-cupy","api","dask-cudf","dask-xgb-10min","developer","guide-to-udfs","index"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,nbsphinx:1,sphinx:56},filenames:["10min.ipynb","10min-cudf-cupy.ipynb","api.rst","dask-cudf.md","dask-xgb-10min.ipynb","developer.rst","guide-to-udfs.ipynb","index.rst"],objects:{"cudf.comm.gpuarrow":{GpuArrowReader:[2,0,1,""]},"cudf.comm.gpuarrow.GpuArrowReader":{to_dict:[2,1,1,""]},"cudf.core":{reshape:[2,2,0,"-"]},"cudf.core.dataframe":{DataFrame:[2,0,1,""]},"cudf.core.dataframe.DataFrame":{add_column:[2,1,1,""],apply_chunks:[2,1,1,""],apply_rows:[2,1,1,""],as_gpu_matrix:[2,1,1,""],as_matrix:[2,1,1,""],assign:[2,1,1,""],at:[2,1,1,""],columns:[2,1,1,""],copy:[2,1,1,""],describe:[2,1,1,""],drop:[2,1,1,""],drop_column:[2,1,1,""],drop_duplicates:[2,1,1,""],dropna:[2,1,1,""],dtypes:[2,1,1,""],fillna:[2,1,1,""],from_arrow:[2,1,1,""],from_gpu_matrix:[2,1,1,""],from_pandas:[2,1,1,""],from_records:[2,1,1,""],groupby:[2,1,1,""],hash_columns:[2,1,1,""],head:[2,1,1,""],iat:[2,1,1,""],iloc:[2,1,1,""],index:[2,1,1,""],isna:[2,1,1,""],isnull:[2,1,1,""],iteritems:[2,1,1,""],join:[2,1,1,""],label_encoding:[2,1,1,""],loc:[2,1,1,""],mean:[2,1,1,""],melt:[2,1,1,""],merge:[2,1,1,""],nans_to_nulls:[2,1,1,""],ndim:[2,1,1,""],nlargest:[2,1,1,""],notna:[2,1,1,""],notnull:[2,1,1,""],nsmallest:[2,1,1,""],one_hot_encoding:[2,1,1,""],partition_by_hash:[2,1,1,""],pop:[2,1,1,""],quantile:[2,1,1,""],query:[2,1,1,""],reindex:[2,1,1,""],rename:[2,1,1,""],replace:[2,1,1,""],rolling:[2,1,1,""],scatter_by_map:[2,1,1,""],select_dtypes:[2,1,1,""],set_index:[2,1,1,""],shape:[2,1,1,""],sort_index:[2,1,1,""],sort_values:[2,1,1,""],stack:[2,1,1,""],tail:[2,1,1,""],tile:[2,1,1,""],to_arrow:[2,1,1,""],to_csv:[2,1,1,""],to_dlpack:[2,1,1,""],to_feather:[2,1,1,""],to_gpu_matrix:[2,1,1,""],to_hdf:[2,1,1,""],to_json:[2,1,1,""],to_orc:[2,1,1,""],to_pandas:[2,1,1,""],to_parquet:[2,1,1,""],to_records:[2,1,1,""],to_string:[2,1,1,""],transpose:[2,1,1,""]},"cudf.core.groupby.groupby.DataFrameGroupBy":{agg:[2,1,1,""],count:[2,1,1,""],max:[2,1,1,""],mean:[2,1,1,""],min:[2,1,1,""],quantile:[2,1,1,""],size:[2,1,1,""],sum:[2,1,1,""]},"cudf.core.groupby.legacy_groupby":{Groupby:[2,0,1,""]},"cudf.core.groupby.legacy_groupby.Groupby":{"var":[2,1,1,""],agg:[2,1,1,""],apply:[2,1,1,""],apply_grouped:[2,1,1,""],as_df:[2,1,1,""],count:[2,1,1,""],max:[2,1,1,""],mean:[2,1,1,""],min:[2,1,1,""],std:[2,1,1,""],sum:[2,1,1,""],sum_of_squares:[2,1,1,""]},"cudf.core.reshape":{concat:[2,3,1,""],get_dummies:[2,3,1,""],melt:[2,3,1,""]},"cudf.core.series":{Series:[2,0,1,""]},"cudf.core.series.Series":{"var":[2,1,1,""],abs:[2,1,1,""],add:[2,1,1,""],all:[2,1,1,""],any:[2,1,1,""],append:[2,1,1,""],applymap:[2,1,1,""],argsort:[2,1,1,""],as_mask:[2,1,1,""],astype:[2,1,1,""],ceil:[2,1,1,""],corr:[2,1,1,""],count:[2,1,1,""],cov:[2,1,1,""],cummax:[2,1,1,""],cummin:[2,1,1,""],cumprod:[2,1,1,""],cumsum:[2,1,1,""],data:[2,1,1,""],describe:[2,1,1,""],diff:[2,1,1,""],digitize:[2,1,1,""],drop_duplicates:[2,1,1,""],dropna:[2,1,1,""],dtype:[2,1,1,""],eq:[2,1,1,""],factorize:[2,1,1,""],fillna:[2,1,1,""],find_first_value:[2,1,1,""],find_last_value:[2,1,1,""],floor:[2,1,1,""],floordiv:[2,1,1,""],from_categorical:[2,1,1,""],from_masked_array:[2,1,1,""],ge:[2,1,1,""],gt:[2,1,1,""],has_null_mask:[2,1,1,""],hash_encode:[2,1,1,""],hash_values:[2,1,1,""],iloc:[2,1,1,""],index:[2,1,1,""],isna:[2,1,1,""],isnull:[2,1,1,""],kurtosis:[2,1,1,""],label_encoding:[2,1,1,""],le:[2,1,1,""],loc:[2,1,1,""],lt:[2,1,1,""],max:[2,1,1,""],mean:[2,1,1,""],min:[2,1,1,""],mod:[2,1,1,""],mul:[2,1,1,""],name:[2,1,1,""],nans_to_nulls:[2,1,1,""],ndim:[2,1,1,""],ne:[2,1,1,""],nlargest:[2,1,1,""],notna:[2,1,1,""],notnull:[2,1,1,""],nsmallest:[2,1,1,""],null_count:[2,1,1,""],nullmask:[2,1,1,""],nunique:[2,1,1,""],one_hot_encoding:[2,1,1,""],pow:[2,1,1,""],product:[2,1,1,""],quantile:[2,1,1,""],radd:[2,1,1,""],reindex:[2,1,1,""],rename:[2,1,1,""],replace:[2,1,1,""],reset_index:[2,1,1,""],reverse:[2,1,1,""],rfloordiv:[2,1,1,""],rmod:[2,1,1,""],rmul:[2,1,1,""],rolling:[2,1,1,""],round:[2,1,1,""],rpow:[2,1,1,""],rsub:[2,1,1,""],rtruediv:[2,1,1,""],scale:[2,1,1,""],searchsorted:[2,1,1,""],set_index:[2,1,1,""],set_mask:[2,1,1,""],shape:[2,1,1,""],shift:[2,1,1,""],skew:[2,1,1,""],sort_index:[2,1,1,""],sort_values:[2,1,1,""],std:[2,1,1,""],sub:[2,1,1,""],sum:[2,1,1,""],tail:[2,1,1,""],take:[2,1,1,""],to_array:[2,1,1,""],to_dlpack:[2,1,1,""],to_frame:[2,1,1,""],to_gpu_array:[2,1,1,""],to_hdf:[2,1,1,""],to_json:[2,1,1,""],to_string:[2,1,1,""],tolist:[2,1,1,""],truediv:[2,1,1,""],unique:[2,1,1,""],valid_count:[2,1,1,""],value_counts:[2,1,1,""],values_to_string:[2,1,1,""],where:[2,1,1,""]},"cudf.io":{avro:[2,2,0,"-"],csv:[2,2,0,"-"],dlpack:[2,2,0,"-"],feather:[2,2,0,"-"],hdf:[2,2,0,"-"],json:[2,2,0,"-"],orc:[2,2,0,"-"],parquet:[2,2,0,"-"]},"cudf.io.avro":{read_avro:[2,3,1,""]},"cudf.io.csv":{read_csv:[2,3,1,""],to_csv:[2,3,1,""]},"cudf.io.dlpack":{from_dlpack:[2,3,1,""],to_dlpack:[2,3,1,""]},"cudf.io.feather":{read_feather:[2,3,1,""],to_feather:[2,3,1,""]},"cudf.io.hdf":{read_hdf:[2,3,1,""],to_hdf:[2,3,1,""]},"cudf.io.json":{read_json:[2,3,1,""],to_json:[2,3,1,""]},"cudf.io.orc":{read_orc:[2,3,1,""],read_orc_metadata:[2,3,1,""],to_orc:[2,3,1,""]},"cudf.io.parquet":{read_parquet:[2,3,1,""],read_parquet_metadata:[2,3,1,""],to_parquet:[2,3,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","module","Python module"],"3":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:module","3":"py:function"},terms:{"01t09":2,"07t12":2,"08t00":2,"0x7f32f0abada0":1,"1125mib":0,"129mib":0,"13t12":2,"14t12":2,"15079mib":0,"15t18":2,"25th":2,"27w":0,"29w":0,"46c":0,"50th":2,"51c":0,"563mib":0,"61a403b52b012":4,"70w":0,"75th":2,"803mib":0,"81389eafdff74e20bcff94c134f6f162":0,"boolean":[2,6],"byte":2,"case":[1,6],"char":2,"class":[2,3],"default":[0,2,6],"final":[4,6],"float":[0,2,6],"function":[0,1,2,4,5,7],"import":[0,1,2,6,7],"int":[2,6],"long":2,"new":[0,2,3,4,6],"null":[0,2,7],"return":[0,1,2,4,6],"short":0,"throw":2,"true":[2,3,6],"try":2,"var":[0,2],"while":[2,6],And:2,Bus:0,For:[0,1,2,3,6],Its:2,Not:2,One:[1,2],That:6,The:[0,1,2,3,4,6],There:6,These:[2,4,5,6],Use:[2,3,4,6],Uses:2,Using:[0,2,4,6],Will:2,With:[0,1,2,3,6],__cuda_array_interface__:6,__fspath__:2,__index_level_0__:0,__setitem__:2,_at:2,_column:6,_name:0,_path:2,_predic:4,_sparse_constructor:1,_time:2,a10:1,a11:1,a12:1,a13:1,a14:1,a15:1,a16:1,a17:1,a18:1,a19:1,a_dari:6,a_mask:6,aaba:0,abc:2,abl:[1,3],about:[0,6],abov:[1,3,6],abs:2,absolut:2,acceler:[0,6],accept:2,access:[0,2,6],accessor:[3,4],accommod:2,aco:2,acquir:4,across:[0,1,3,6],activ:[0,4],actual:[0,6],adapt:[0,6],add:[0,2],add_column:2,add_ten:0,added:[0,2],adding:0,addit:[2,6],addition:[3,4],address:4,advanc:[1,3],advantag:1,advertis:3,after:[0,2,6],again:[1,6],against:2,agg:[0,2,3],agg_col1:0,agg_col2:0,aggreg:[0,2,3,4,5],ahead:4,algebra:1,algorithm:2,alia:2,alic:6,all:[0,2,3,4,5,6],alloc:[2,6],allow:[0,2,6],along:2,alreadi:[1,2,3],also:[0,1,2,6],alter:2,altern:[1,2],altogeth:2,alwai:2,analyz:0,ani:[0,2,3,6],anoth:[0,2],answer:6,apach:0,api:[0,1,4,6,7],apolog:3,appear:2,append:2,appli:[0,2,5,6],applic:2,apply_chunk:[2,6],apply_group:[2,6],apply_row:[2,6],applymap:[2,6],applyutil:5,approach:6,approxim:2,arang:[0,2,6],arbitrari:2,architectur:6,arg1:[2,6],arg:2,argsort:2,argument:[1,2,6],arr:[1,6],arr_cupi:1,arrai:[0,2,7],array_lik:2,arrow:5,as_df:2,as_gpu_matrix:[1,2],as_index:[2,6],as_mask:2,as_matrix:[0,2],asarrai:[1,6],ascend:2,ascii:2,ascontiguousarrai:1,asfortranarrai:1,asin:2,assign:[0,2,3,4,6],associ:4,assum:[1,2],astyp:[0,2],ata:0,atan:2,attempt:2,attribut:[0,2],aug:0,auto:2,automat:[0,2,6],avail:[0,2,4],averag:[2,6],avg:2,avoid:2,avro:2,axes:2,axi:[0,1,2,4],baca:0,back:0,background:[0,6],bad:4,balanc:4,base:[0,2,6],baselin:0,basic:[0,5,6],batch:2,becaus:[0,1,2,3,6],becom:[1,2],been:3,befor:[0,1,2,4,6],beforehand:1,begin:[0,2],behavior:[0,2,6],behaviour:2,being:[0,6],belong:2,below:[0,2,6],best:[0,1],better:5,between:[1,2,3,4],beyond:0,big_data:4,big_futur:4,bin:2,binari:2,bird:2,bit:2,bitmask:[2,6],blkct:2,block:[2,6],blockdim:[2,6],blosc:2,blosclz:2,bob:6,bool:[2,6],boost:4,booster:4,borrow:0,both:[2,3,6],bottom:2,bound:[2,6],boundari:6,box:6,broader:6,brotli:2,bst:4,buffer:[2,5],build:[2,4,6],built:[0,1,2],builtin:2,burden:4,byte_rang:2,bytesio:2,bz2:2,bzip2:2,caba:0,cache_kei:2,calcul:[0,1,2],call:[0,2,4,6],callabl:2,can:[0,1,2,3,4,6],cannot:2,cap:0,carefulli:6,cast:2,cat:[0,2],categor:[2,5],categori:[0,2,3],ce75665b80c984639a37a86847d7de7d:0,ceil:2,cell:[1,6],center:[2,6],certain:2,certainli:3,chang:2,charact:2,cheatsheet:0,check:[1,2],checksum:2,choic:1,chunk:[2,6],chunksiz:2,classmethod:2,cleaner:4,cleanli:1,client:[0,4],close:2,cluster:[0,3,7],cmath:2,cmd:4,code:[0,2,6,7],coerc:[1,2],cohes:3,col1:[2,6],col:1,col_level:2,cola_cupi:1,collaps:2,collect:0,column:[0,1,2,3,4,5,6],column_index:0,column_nam:2,columnar:0,columnop:5,combin:[0,2],comfort:[0,6],comm:2,comma:2,command:4,comment:2,common:[2,6],commun:4,compat:2,compil:[2,6],complet:0,complevel:2,complex:[2,6],complib:2,complic:6,compon:2,compos:6,comprehens:3,compress:2,compressor:2,comput:[0,2,3,6,7],concat:[2,4],concaten:[0,2,4],concept:0,concurr:2,cond:2,conda:[0,1,4,6],condit:[0,2,6],condition:6,conditional_add:6,configur:[2,6],conflict:2,conform:2,conjunct:6,consecut:2,conserv:2,consid:[2,4],consider:6,consist:6,constant:2,construct:[2,4],constructor:[1,2],consum:4,contain:[0,2,4,5,6],content:[2,6,7],contigu:1,continu:1,contract:0,control:[2,6],convent:2,convers:[1,2],convert:[2,3,7],convert_ax:2,convert_d:2,coordin:4,copi:2,core:[0,1,2,4,6],corr:2,correct:2,correl:2,correpond:2,correspond:[2,6],cos:2,could:[1,2,6],count:[0,2,3],coupl:6,cov:2,covari:2,cover:6,cow:2,cpp_dlpack:1,cpu:[0,1,3],creat:[0,1,2,3,6],creator:0,criteria:2,criterion:2,csc:1,csc_matrix:1,csr_matrix:1,csv:2,cuda:[0,1,2,4,5,6],cuda_array_interfac:6,cudapysupport:2,cudautil:[5,6],cudf:[2,5],cudf_compar:0,cudf_df:3,cudf_obj:2,cudf_to_cupy_sparse_matrix:1,cudf_val:2,cummax:2,cummin:2,cumprod:2,cumsum:2,cumul:2,cupi:7,cupyx:1,current:[0,2,3,5,6],custom:[2,3,6],dai:6,dan:6,dashboard:[0,4],dask:[5,7],dask_cuda:[0,4],dask_cudf:[0,3,4],dask_cudf_compar:0,dask_gdf:0,data:[1,2,3,4,6,7],data_column:2,databas:2,datafram:[0,3,4,5,7],dataframegroupbi:2,dataset:[0,2,6,7],date:[0,2,3],date_ddf:0,date_df:0,date_format:2,date_rang:0,date_unit:2,datelik:2,datetim:[0,2],datetime64:2,dayfirst:2,dayofweek:3,ddf1:0,ddf2:0,ddf:[0,4],ddf_a:0,ddf_b:0,ddof:2,decent:3,decid:[2,5],decim:2,decod:[2,4],decompress:2,decor:2,deep:2,def:[0,1,2,6],default_handl:2,defin:[0,1,2,5,7],delai:0,delet:2,delim_whitespac:2,delimit:2,delimt:2,demonstr:6,dens:[1,2],depend:[0,1,2],deprec:2,depth:6,descend:2,describ:2,descript:0,deseri:2,design:3,desir:[2,6],destin:2,detail:[0,2],detect:[2,4],determin:2,dev:2,dev_ari:2,develop:[1,6,7],deviat:[2,3],devic:2,device_array_lik:6,devicearrai:6,devicendarrai:[1,6],df1:0,df2:[0,6],df_a:[0,2],df_b:[0,2],df_group:2,df_merg:2,df_new:2,dgdf:0,diag_data:1,diagon:1,dict:[2,6],dictionari:[2,6],did:6,diff:2,differ:[2,4,6],difficult:[3,6],dig:2,digit:2,dimens:2,dimension:[1,2],direct:[0,2],directli:[0,1,2,5,6],directori:[0,2,5],disabl:[2,7],discard:2,discuss:0,disk:2,disp:0,distribut:[0,4],divid:6,divis:2,dlpack:[1,2],dmlc:[2,4],doc:[1,2],docstr:5,document:[0,2,6],docutil:5,doe:[2,6],doesn:[0,6],dog:[0,2],doing:6,don:[1,2,3,6],done:0,doneandnotdonefutur:0,doubl:2,double_precis:2,doublequot:2,downstream:[0,1],downward:2,drawn:6,driver:[0,2],drop:2,drop_column:2,drop_dupl:2,drop_first:2,dropna:2,ds2:0,dtype:[0,1,2,6],due:[0,2,3,6],dummy_na:2,duplic:2,dure:[2,6],each:[0,1,2,4,6],earlier:6,easi:[1,3],easiest:[1,6],eator:0,ecc:0,ecosystem:[1,6],edg:2,effect:3,effici:2,either:[0,1,2,6],element:[0,2,3],elemenwis:2,els:[0,2,6],empti:[2,6],empty_lik:6,emul:2,enabl:[2,4],encapsul:2,encod:[0,2,4],encourag:[1,3],end:[2,6],enforc:0,engin:2,enorm:1,enough:[0,2,3,6],ensur:[0,2,4],entir:[1,4,6],entri:2,enumer:[2,6],env:[0,1,4,6],environ:4,epoch:2,equal:2,equival:[0,2],error:[2,4],evalu:0,even:[1,2,6],ever:6,everi:[0,2,6],everyth:2,exact:2,exampl:[0,1,2,6],example_fil:0,example_func:6,example_output:0,except:[2,6],exclud:2,execut:[0,2,6],exist:[0,1,2],exp:2,expand:2,expect:[1,2,3,6],expens:3,explicitli:[0,1,2,6],explor:6,exponenti:2,expr:2,express:2,extens:2,extra:2,extract:2,fact:6,factor:2,fairli:6,fals:[0,1,2,6],false_valu:2,fan:0,fashion:6,fast:[0,2,3],fastavro:2,faster:[2,5],feather:2,featur:[2,5],feel:6,few:6,field:[0,2],field_nam:0,file:[0,2,5],filenam:2,filepath_or_buff:2,fill:[2,6],fill_valu:2,fillna:[0,2,3],filter:[0,2],find:2,find_first_valu:2,find_last_valu:2,finish:0,first:[0,2,6],fish:2,fisher:2,fit:0,five:2,fix:[2,3],flag:1,flat:5,fletcher32:2,flexibl:[0,1,2,6],float32:2,float64:[2,6],floor:2,floordiv:2,fly:2,fname:2,focu:1,focus:6,follow:[2,3,6],foo:[0,2],foo_dask:0,foral:[2,6],forc:[0,2],force_ascii:2,forceindex:2,fork:4,form:[2,3],format:[0,1,2,3,5],format_byt:4,fortran:[1,2],found:2,frame:2,free:6,freq:[0,2],from:[0,1,2,3,4,6],from_arrai:2,from_arrow:2,from_batch:2,from_categor:2,from_cudf:0,from_dask_datafram:4,from_dlpack:[1,2],from_gpu_matrix:[1,2],from_masked_arrai:2,from_panda:[0,2,3,4],from_record:2,from_tupl:0,fromdlpack:1,frustrat:3,ftp:2,full:[0,1,2,3],fulli:0,func:[0,2,4],futur:[0,2,4],g_col1:0,gamma:2,garbag:2,gdf1:0,gdf2:0,gdf:[0,2],gdf_categori:2,gdf_col:1,gdf_string:2,gear:0,gener:[2,3,5],georg:6,get:[1,2,6],get_dummi:2,get_renderable_datafram:2,ghi:2,give:[1,2],given:2,global:[2,6],going:[1,6],good:[2,4],govern:2,gpu:[0,1,2,4,5,6,7],gpu_add:6,gpu_hist:4,gpu_kernel_mask:6,gpuarrow:[2,5],gpuarrowread:7,grab:6,grade:0,graph:[0,4],greater:2,grid:6,group:[2,3,6],group_kei:2,groupbi:[0,3,5,7],grow_polici:4,guarante:2,guard:6,guid:[2,6],gzip:2,had:0,handl:[2,7],handler:2,has:[0,2,3,4,6],has_null_mask:2,hash:[2,6],hash_column:2,hash_encod:2,hash_valu:2,have:[0,1,2,4,6],hdf5:2,hdf:2,hdfstore:2,head:[0,1,2,6],header:2,heart:6,help:6,helper:[1,5],here:[1,2,5,6],hierarch:[0,2],high:6,higher:2,highlight:6,hold:2,hood:0,hopefulli:6,host:2,hostnam:4,hot:2,how:[0,1,2,6],howev:0,html:2,http:[0,2,4],hundr:1,iat:2,id_var:2,ident:2,identifi:[2,6],idx:[0,2],ignor:[2,6],ignore_index:2,illustr:[1,6],iloc:[0,2],implement:[0,2,3,5],implicitli:6,improv:2,in1:2,in2:2,in3:2,in_col:6,includ:[0,2,6],incol:[2,6],inconsist:3,incorrect:2,increas:2,independ:[2,6],index:[2,3,5,6,7],index_col:2,index_column:0,index_label:2,indic:[2,5,6],individu:2,ineffici:2,infer:2,inferenc:4,inform:[0,2,6],ingest:3,initi:[0,7],inner:2,inplac:2,input:[1,2,6],insert:2,insid:2,instanc:[2,4,6],instanti:4,instead:[0,2,6],int32:[0,2,6],int64:[0,1,2],int8:2,integ:[0,2],integr:2,intens:1,interact:[0,6],interfac:[1,6],intermedi:2,intern:2,interoper:1,interpol:2,interpret:2,intersect:2,interv:2,interweav:7,introduct:0,introductori:1,invalid:2,invok:2,ipaddr:4,is_monoton:2,is_monotonic_decreas:2,is_monotonic_increas:2,is_uniqu:2,isfortran:1,isin:[0,2],isn:1,isna:2,isnul:2,iso8601:2,iso:2,issu:[2,3],item:2,iter:2,iteritem:2,its:[2,4,5],itself:2,jit:[2,5,6],jite:6,join:[2,3],json:2,jsonread:2,jump:2,just:[1,2,6],keep:[2,4],keep_default_d:2,keep_default_na:2,keep_index:2,kei:[0,2],kernel:[2,5,7],keyword:[0,2,6],kind:[0,2],kurtosi:2,kwarg1:2,kwarg2:2,kwarg:[2,6],label:[2,4],label_encod:2,lack:[2,6],lambda:3,larg:[3,4],larger:0,largest:2,last:2,latenc:6,launch:[2,4,6],lazi:0,lead:[1,2,3,6],least:2,leav:[2,4,6],left:[0,2,3],left_index:[2,3],left_on:2,legaci:[6,7],legacy_groupbi:2,len:[0,2,4,6],length:[2,6],less:2,let:[1,6],level:[0,2,6],leverag:[1,4,6],lexicograph:2,lgamma:2,lib:[0,1,4,6],libcudf:2,libgdf:[2,7],librari:[1,2,3,6,7],lies:2,lightweight:4,like:[0,2,3,4,6],limit:[2,6],linalg:1,line:[1,2,4],line_termin:2,linear:[1,2,3],linetermin:2,list:[0,1,2,3,4,6],load:[0,2,4],loc:[0,2,3,6],local:[0,2,6],local_dict:[0,2],localcudaclust:[0,4],localpath:2,locat:2,log:2,logic:[0,5,6],logical_and:2,logical_not:2,logical_or:2,look:[1,3,6],loop:[2,6],lossguid:4,lot:[5,6],low:6,lower:[0,2],lsuffix:2,luckili:1,lz4:2,lz4hc:2,lzo:2,machin:[0,3],mai:[0,1,2,4,6],mainli:0,maintain:[0,2],major:[1,2],make:[0,1,2,5,6],manag:6,mangle_dupe_col:2,mani:[0,3,6],manipul:0,manner:2,manual:1,map:[0,2,5,6],map_index:2,map_partit:[0,3],map_siz:2,mapper:2,mark:2,mask:[2,6],mask_get:6,match:[2,6],math:[2,6],mathemat:6,matric:1,matrix:[2,7],matter:[1,6],matur:1,max:[0,2,3,6],max_depth:4,max_leav:4,maximum:2,mean:[0,1,2,3,4,6],median:2,melt:2,mem:[1,6],memori:[0,1,2,4,6],mention:[3,6],merg:[0,2,3],met:0,metad:0,metadat:0,metadata:[0,2],method:[1,2,3,6],metric:7,microsecond:2,midpoint:2,might:1,millisecond:2,min:2,min_period:[2,6],minimum:2,minut:7,mislead:3,miss:2,mix:2,mkdir:0,mod:2,mode:2,model:[0,7],modifi:2,modul:7,modulo:2,moment:0,monoton:2,moo:2,more:[0,2,6],most:[0,2,3,6],move:[1,2,6,7],much:0,mul:2,mult:2,mult_add:2,multi:[0,2,4,5,6,7],multiindex:2,multipl:[0,2,3,5,6],multipli:6,multiply_by_5:6,must:[0,1,2,4,6],n_gpu:4,na_filt:2,na_posit:2,na_rep:2,na_sentinel:2,na_valu:2,name:[0,2,4,6],namedtupl:2,nan:[2,6],nan_as_nul:2,nanosecond:2,nans_to_nul:2,navig:7,nccl:7,nccl_p2p_disabl:4,ncol:2,ndarrai:[0,1,2,6],ndim:2,nearest:2,necessari:[0,6,7],need:[0,1,2,6],neg:2,nelem:[1,2],new_arr:1,newer:3,next:[0,1,6],nlargest:2,node:4,non:2,none:[0,2,4,6],nonzero:1,nor:2,norm:1,normal:[1,4],not_don:0,note:[0,2,4,6],notebook:1,notic:6,notna:2,notnul:2,now:[0,1,2,6],npart:2,npartit:[0,3,4],nrow:[0,2,6],nsmallest:2,nt64:0,null_count:2,nullmask:[2,6],num1:2,num:0,num_boost_round:4,num_round:4,num_row:2,num_row_group:2,numba:[1,2,5,7],number:[0,2,4,6],numer:[2,5,6],numeric_onli:2,nump:0,numpi:[2,4,6],numpy_:0,numpy_typ:0,nunber:2,nuniqu:2,nvidia:0,obj:2,object:[1,2,3,4,6],observ:[0,2],occasion:2,occur:0,occurr:[0,2],off:[0,6],offer:6,offset:2,often:3,omit:2,onc:[0,2],one:[0,1,2,6],one_hot_encod:2,onli:[0,2,3,6,7],open:2,oper:[1,2,3,5,7],oppos:2,opt:[0,1,4,6],optim:[2,4],option:[2,4,6],orc:2,orchestr:3,order:[0,1,2],org:2,organ:7,orient:2,origin:[2,3],other:[0,2,3,5,6],otherwis:[0,2],our:[0,1,6],out1:2,out2:2,out:[1,2,6],out_col:6,out_dtyp:2,outcol:[2,6],outer:2,output:[1,2,3,4,5,6],output_dari:6,output_fram:2,outsid:[2,6],over:[2,4,6],overhead:2,overlap:2,overrid:2,overview:7,overwit:2,own:6,ownership:4,p2p:7,packag:[0,1,3,4,6],page:7,pair:2,panda:[1,2,3,4],pandas_typ:0,pandas_v:0,paradigm:0,parallel:[0,2,3,6],param:4,paramet:[2,7],parquet:[2,3],pars:2,parse_d:2,parser:2,part:2,particular:2,partit:[0,2],partition_by_hash:2,partition_col:2,pass:[0,1,2,4,6],past:6,path:[0,2],path_or_buf:2,pathlib:2,pd_result:2,pdf:[0,2,4],pearson:2,per:[0,2],percentil:2,perf:0,perform:[1,2,4,5],period:[0,2],persist:[3,4,7],pessimist:6,pessimistic_nul:2,pet_cod:2,pet_dummi:2,pet_dummy_0:2,pet_dummy_1:2,pet_dummy_2:2,pet_own:2,pet_typ:2,pid:0,pipe:4,place:2,plan:6,pleas:[0,2,4,6],point:[2,6],pointer:2,pop:2,popen:4,popul:[1,6],portion:[0,6],posit:2,possibl:[2,5],post:0,postfix:2,pow:2,power:2,practic:0,pre:6,precis:2,precise_float:2,pred:4,predict:7,prefix:2,prefix_sep:2,prescrib:2,preserv:2,preserve_index:2,previous:[1,6],price:6,print:[2,4],proce:[0,1],proceed:0,process:[0,1,2,4,6],produc:[0,1,2,4],product:2,progress:0,project:3,promot:2,proper:2,properti:[0,2],propog:6,protocol:2,provid:[0,1,2,6],ptx:2,put:2,pwr:0,py3:2,pyarrow:[0,2],pycapsul:2,pycapsule_obj:[1,2],pydata:[2,6,7],pytabl:2,python3:[0,1,4,6],python:[0,2,4,6],quant_index:2,quantil:2,queri:[0,2,3,4,5],queryutil:5,question:6,quick:5,quickli:1,quinn:6,quot:2,quote_al:2,quote_minim:2,quote_non:2,quote_nonnumer:2,quotechar:2,radd:2,rais:[1,2,3],rand:0,randint:[0,2,4],random:[0,1,2,7],randomdata:6,randomli:0,rang:[0,1,2,6],rangeindex:2,rapid:[0,1,2,4,6],raw:2,read:[0,2,6],read_avro:2,read_csv:[0,2,3],read_feath:2,read_hdf:2,read_json:2,read_orc:[0,2],read_orc_metadata:2,read_parquet:[0,2],read_parquet_metadata:2,reader:0,readi:6,recarrai:2,receiv:2,recogn:2,recommend:6,record:2,recordbatch:2,recov:2,reduc:4,reduct:3,refer:[4,7],reg:4,regardless:[1,2,3],reindex:2,relat:2,relev:2,reli:0,remaind:6,remot:2,remov:[2,6],renam:2,rep:2,repeat:2,repetit:2,replac:[0,1,2],repo:5,report:3,repres:2,request:2,requir:[2,4,5,6],res:1,resembl:2,reset:2,reset_index:2,reshap:[1,2],reshaped_arr:1,reshaped_df:1,resourc:2,respect:[1,2],restor:0,result:[0,2,3,4,6],results_ddf:0,retriev:2,reus:3,reusabl:5,revers:[0,2],rfloordiv:2,right:[2,3],right_index:[2,3],right_on:2,rmm:6,rmod:2,rmse:7,rmul:2,roll:[2,3,7],rolling_avg:[2,6],rolling_avg_:6,root:[2,4],round:[2,4],row:[0,1,2,3,6],row_group:2,rpow:2,rsub:2,rsuffix:2,rtruediv:2,run:[0,2,6],runtim:6,s_type:0,s_version:0,sacrif:1,safe:[0,6],sai:6,same:[0,1,2,3,6],sampl:[0,2],sarah:6,scalar:2,scale:[0,2,3],scatter:[2,4],scatter_by_map:2,schedul:[0,4],schema:2,scientist:6,scipi:1,scope:[0,6],seamlessli:1,search:[2,7],search_dat:[0,2],search_date2:2,searchabl:2,searchsort:2,second:[0,2],section:[0,6],see:[0,2,3,6],seed:[0,6],seek:2,seg:2,select:[2,3],select_dtyp:2,self:2,sep:2,separ:[2,6],seper:2,sequenc:2,sequenti:6,ser:[2,6],seri:[3,4,5,7],serial:[2,5],serialis:2,session:4,set:[0,2,4,6],set_index:2,set_mask:2,setup:0,sever:6,shape:[1,2,6],share:6,shift:2,shorthand:2,should:[0,2,6,7],show:[0,5],shuffl:2,side:2,similar:[2,3,5,6],simliar:5,simpl:[0,2,6],simpler:6,simpli:1,simultan:6,sin:2,sinc:[2,6],singl:[0,1,2,3,4],sion:0,site:[0,1,4,6],size:[2,4,6],skew:2,skip:[2,6],skip_blank_lin:2,skip_row:2,skipfoot:2,skipinitialspac:2,skipna:2,skiprow:2,sleep:0,slice:[0,2],slide:[2,6],slight:3,small:[1,3,6],smaller:2,smallest:2,smi:0,smooth:[0,7],snappi:2,snippet:0,solut:3,some:[0,2,5,6],some_func:2,someth:0,sometim:[0,1,6],sooner:0,sort:[0,2,3],sort_index:2,sort_valu:[0,2],sorted_obj:2,sourc:2,space:2,span:2,spark:0,spars:[2,7],sparse_data:1,sparseformat:1,specif:[0,2,4,6],specifi:[0,2,6],speed:[1,2],spent:0,split:[0,2,4],spread:[0,3,6],sql:[0,2],sqrt:[2,4,6],squar:4,squared_error:4,squarederror:4,stack:2,standard:[0,2,3],star:0,start:[0,2,4,6],stat:2,statement:[0,6],statist:[0,2],statu:[0,4],std:[2,3],stdout:4,step:0,stock:6,stop:[0,2],store:[0,1,2,6],str:[0,1,2,4,6],streamlin:6,strict:2,stride:2,string:[2,3,6],stringindex:0,stringio:2,strings_to_categor:2,stripe:2,strptime:[0,2],strtod:2,structur:[0,1,2,6],style:[0,2,6],sub:2,subclass:5,submit:4,subprocess:4,subset:[2,3],subtract:2,successfulli:6,suffic:[2,6],suffix:2,suitabl:2,sum:[0,1,2,3],sum_of_squar:2,summari:[2,7],suppli:[2,6],support:[0,1,2,3,6],sure:[1,6],syntax:6,sys:1,system:0,tabl:[0,2],tabular:6,tail:2,take:[1,2,4,6],tan:2,task:[0,4,6],tcp:[0,4],tell:4,temp:0,temp_parquet:0,tensor:[1,2],term:2,tesla:0,test1:0,test:[0,2,3,4,5],testorcfil:0,text:2,than:[0,2,6],thank:6,thei:[2,6],them:[2,6],therefor:2,thi:[0,1,2,3,4,5,6],thing:[3,6],think:6,those:2,though:[0,6],thousand:[1,2],thread:[2,6],threadidx:[2,6],three:[1,6],thresh:2,through:6,thrust:2,thu:2,tile:2,time:[1,2,3,4,6],timedelta:2,timestamp:[0,2,3],to_arrai:[0,2],to_arrow:[0,2],to_csv:[0,2],to_dict:2,to_dlpack:[1,2],to_feath:2,to_fram:2,to_gpu_arrai:2,to_gpu_matrix:2,to_hdf:2,to_json:2,to_orc:2,to_panda:[0,2,3],to_parquet:[0,2],to_record:2,to_replac:2,to_str:2,todlpack:1,togeth:1,tolist:2,too:6,top:0,total:[1,2,6],tpb:2,track:3,tracker:3,train:7,transform:[0,1,2],transpar:2,transpos:[1,2],treat:2,tree_method:4,true_valu:2,truediv:2,tue:0,tupl:[0,2],turn:6,tutori:0,twenti:0,two:[1,2,6],typ:2,type:[0,1,2,6],typeerror:2,udf:[1,2,7],uint8:2,unbias:2,uncorr:0,undefin:6,under:[0,5],underli:[0,1,2,6],underneath:6,unicod:0,unifi:4,union:2,uniqu:[0,2],unique_k:2,unit:2,unix:2,unpivot:2,unsort:3,unspecifi:2,until:0,unusu:2,upper:2,upstream:0,upward:2,url:2,ursula:6,usag:[0,2,6],use:[1,2,3,4,5,6,7],use_index:2,use_nam:2,use_pandas_metadata:2,usecol:2,used:[0,2,6],useful:[2,4,5,6],user:[0,1,2,3,4,5,7],userwarn:[0,1,4,6],uses:[2,6],using:[0,1,2,4,6],utf:[0,2],util:[0,4,5,6],val:[0,2],valid:[1,2,6],valid_count:2,validity_mask:6,vals_a:[0,2],vals_b:[0,2],valu:[0,2,4,7],value_count:[0,2],value_nam:2,value_var:2,valueerror:[1,2],values_host:2,values_to_str:2,var_nam:2,vari:0,variabl:[0,2],varianc:2,varieti:6,variou:2,veri:[1,6],version:[0,2,7],via:[0,1,2],visual:3,volatil:0,wai:[1,6],wait:[4,7],walk:6,wall:1,want:[0,1,6],warn:1,well:1,wendi:6,were:0,what:[6,7],when:[2,3,6,7],where:[0,2],whether:[1,2],which:[0,1,2,3,5,6],whitespac:2,whose:2,wide:2,wildcard:0,win_siz:[2,6],win_typ:2,window:[2,7],wise:[0,1,2,3],within:[2,6],without:[1,2,6],won:1,work:[0,2,4,6,7],worker:[0,4],workflow:[0,7],wors:2,would:[0,2,6],wouldn:1,wrap:[0,6],write:[0,1,2,6],written:2,x_test:4,x_train:4,xavier:6,xgboost:7,y_test:4,y_train:4,y_type:0,year:6,yet:[0,2,3,6],yield:0,you:[0,1,6],your:[0,1,6],yourself:6,zero:[2,6],zip:[0,2,6],zlib:2,zstd:2},titles:["10 Minutes to cuDF and Dask-cuDF","10 Minutes to cuDF and CuPy","API Reference","Multi-GPU with Dask-cuDF","10 Minutes to Dask-XGBoost","Developer Documentation","Overview of User Defined Functions with cuDF","Welcome to cuDF\u2019s documentation!"],titleterms:{"boolean":0,"function":6,"import":4,"null":6,api:[2,3],append:0,applymap:0,arrai:[1,6],arrow:0,cannot:5,categor:0,cluster:4,code:5,comput:4,concat:0,convert:[0,1],creation:0,csv:0,cudf:[0,1,3,4,6,7],cupi:[1,6],dask:[0,3,4],dask_xgboost:4,data:0,datafram:[1,2,6],dataset:4,defin:[4,6],develop:[3,5],disabl:4,document:[5,7],get:0,gpu:3,gpuarrowread:2,group:0,groupbi:[2,6],handl:6,histogram:0,how:4,index:0,indic:7,initi:4,input:4,interweav:1,join:0,kernel:6,label:0,legaci:2,libgdf:5,librari:0,matrix:1,method:0,metric:4,minut:[0,1,4],miss:0,model:4,modul:4,move:5,multi:3,multiindex:0,navig:3,nccl:4,necessari:4,numba:6,numpi:0,object:0,onli:4,oper:[0,6],orc:0,organ:5,out:0,overview:6,p2p:4,panda:0,paramet:4,parquet:0,perform:0,persist:0,posit:0,predict:4,pydata:1,random:4,refer:2,represent:0,rmse:4,roll:6,run:4,select:0,seri:[0,1,2,6],should:5,smooth:1,spars:1,standard:6,stat:0,string:0,summari:6,tabl:7,time:0,tip:0,train:4,transpos:0,udf:6,use:0,user:6,valu:6,version:4,via:4,view:0,wait:0,welcom:7,what:[0,3],when:0,window:6,work:3,workflow:1,xgboost:4}})